// SPDX-License-Identifier: MIT
//pragma
pragma solidity ^0.8.7;

import "./PriceConverter.sol";

//we wanna widhraw funds
//we wanna get funds
//say a minimun funding value in USD

// constant, immutable === using them saves gas
//after using constant 944,608 gas, before using constant 966,825 gas

//error codes
error FundMe__NotOwner();

// interfaces, libraries, contracts

/** @title A contract for crowd funding
 * @author Kartik Goel
 * @notice it is to demo a sample funding contract
 * @dev implimets pricefeeds as our library
 */
contract FundMe {
    //type declarations
    using PriceConverter for uint256;

    address[] public funders;
    mapping(address => uint256) public addressToAmountFunded;
    uint256 public constant MINIMUM_USD = 50 * 1e18;

    address public immutable i_owner;
    AggregatorV3Interface public priceFeed;

    modifier onlyOwner() {
        //require(msg.sender==i_owner,"sender is not owner");
        if (msg.sender != i_owner) {
            revert FundMe__NotOwner();
        }
        _; //do rest of the code present in the function that uses it
    }

    constructor(address priceFeedAddress) {
        i_owner = msg.sender;
        priceFeed = AggregatorV3Interface(priceFeedAddress);
    }

    receive() external payable {
        fund();
    }

    fallback() external payable {
        fund();
    }

    /// @notice Funds our contract based on the ETH/USD price
    function fund() public payable {
        //we wanna be able to set a minimum fund amount in USD
        //after this lesson try to make in rupees
        //1. how do we send ETH to this contract?
        require(
            msg.value.getConversionRate(priceFeed) >= MINIMUM_USD,
            "didnt send enough"
        ); // 1e18 == 1* 10**18 wei or 1 ETH
        //18 decimals
        funders.push(msg.sender);
        addressToAmountFunded[msg.sender] += msg.value;
        //what is reverting?
        //Undo any action before,and send remaining gas back
    }

    function withdraw() public onlyOwner {
        //require( msg.sender==owner,"sender is ot owner"); //this makes the withraw function only accessible to the owner but there is a better way
        for (
            uint256 funderIndex = 0;
            funderIndex < funders.length;
            funderIndex = funderIndex + 1
        ) {
            address funder = funders[funderIndex];
            addressToAmountFunded[funder] = 0;
        }
        funders = new address[](0); //resets the array

        // actually withraw the funds

        //transfer
        //msg.sender= address type
        //payable(msg.sender) = paybale address type. Transfer only works with payable address
        //payable(msg.sender).transfer(address(this).balance);

        //send
        //bool sendSuccess= payable (msg.sender).send(address(this).balance);
        //require(sendSuccess, "send failed");

        //call
        (bool callSuccess, ) = payable(msg.sender).call{
            value: address(this).balance
        }("");
        require(callSuccess, "call failed");
    }
}
