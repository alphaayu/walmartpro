import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
} from "@chakra-ui/react";
import mockData from "../mockData";

// Utility function to determine the button color based on the order action
const getColorScheme = (action) => {
  switch (action) {
    case "Cancelled":
      return "red"; // red color scheme for cancelled orders
    case "Pending":
      return "yellow"; // yellow color scheme for pending orders
    default:
      return "green"; // green color scheme for all other actions (assumed completed or active)
  }
};

const OrdersTable = () => {
  return (
    <Table variant="striped" colorScheme="gray">
      <Thead>
        <Tr>
          <Th>Product Items</Th>
          <Th>Items No</Th>
          <Th>Incoming</Th>
          <Th>Category</Th>
          <Th>Date</Th>
          <Th>Quantity</Th>
          <Th>Price</Th>
          <Th>Paid</Th>
          <Th>Action</Th>
        </Tr>
      </Thead>
      <Tbody>
        {mockData.map((order, index) => (
          <Tr key={index}>
            <Td>{order.productItems}</Td>
            <Td>{order.itemsNo}</Td>
            <Td>{order.incoming}</Td>
            <Td>{order.category}</Td>
            <Td>{order.date}</Td>
            <Td>{order.quantity}</Td>
            <Td>{order.price}</Td>
            <Td>{order.paid ? "✓" : "✗"}</Td>
            <Td>
              <Button colorScheme={getColorScheme(order.action)}>
                {order.action}
              </Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default OrdersTable;
