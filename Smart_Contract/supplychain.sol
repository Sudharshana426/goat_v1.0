// pragma solidity >= 0.8.25 <=0.8.28;

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SupplyChain {

    enum ItemState { Created, Shipped, Received }

    struct Item {
        uint128 id;
        string name;
        string batch_number;
        string product_name;
        string quantity_of_items;
        string manufacturing_date;
        string price_per_unit;
        address manufacturer;
        address currentHolder;
        ItemState state;
        uint256 timestamp;
    }

    mapping(uint128 => Item) public items;
    uint128 public nextItemId = 1;

    event ItemCreated(uint128 itemId, string itemName, address manufacturer);
    event ItemShipped(uint128 itemId, address receiver);
    event ItemReceived(uint128 itemId, address receiver);

    function createItem(string[] memory arr) public {
        uint128 newItemId = nextItemId++;
        items[newItemId] = Item(newItemId, arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], msg.sender, msg.sender, ItemState.Created, block.timestamp);
        emit ItemCreated(newItemId, arr[0], msg.sender);
    }

    function shipItem(uint128 _itemId, address _receiver) public {
        require(items[_itemId].currentHolder == msg.sender, "Only current holder can ship.");
        require(items[_itemId].state == ItemState.Created || items[_itemId].state == ItemState.Shipped,"Item cannot be shipped at this stage");
        items[_itemId].currentHolder = _receiver;
        items[_itemId].state = ItemState.Shipped;
        emit ItemShipped(_itemId, _receiver);
    }

    function receiveItem(uint128 _itemId) public {
        require(items[_itemId].currentHolder == msg.sender, "Only current holder can receive.");
        require(items[_itemId].state == ItemState.Shipped,"Item cannot be received at this stage");
        items[_itemId].state = ItemState.Received;
        emit ItemReceived(_itemId, msg.sender);
    }

    function getItem(uint128 _itemId) public view returns (Item memory) {
        return items[_itemId];
    }
}