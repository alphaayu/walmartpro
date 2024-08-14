import React, { useState, useEffect } from 'react';
import mockData from '../mockData.js';
import { Box, Table, Thead, Tbody, Tr, Th, Td, Input, Flex } from '@chakra-ui/react';
import Pagination from './Pagination';

const ProductTable = () => {
  const [data, setData] = useState(mockData);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    setData(
      mockData.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <Box p={5} className="product-table-container">
      <Flex mb={4} justify="flex-end">
        <Input
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          width="250px"
        />
      </Flex>
      <Table variant="simple" sx={{ tableLayout: "fixed" }}>
        <Thead>
          <Tr>
            <Th>Product Name</Th>
            <Th>Category</Th>
            <Th>SKU</Th>
            <Th>Date</Th>
            <Th>Quantity</Th>
            <Th>Promise Date</Th>
            <Th>Customers</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {currentItems.map((item) => (
            <Tr key={item.id}>
              <Td>{item.name}</Td>
              <Td>{item.category}</Td>
              <Td>{item.sku}</Td>
              <Td>{item.date}</Td>
              <Td>{item.quantity}</Td>
              <Td>{item.promiseDate}</Td>
              <Td>{item.customer}</Td>
              <Td>{item.status}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(data.length / itemsPerPage)}
        onPageChange={paginate}
      />
    </Box>
  );
};

export default ProductTable;
