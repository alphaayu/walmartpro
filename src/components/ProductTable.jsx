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
    <Box 
      p={5} 
      className="product-table-container"
      bg="#e0f2f1"  // Light green background
      color="#388e3c" // Dark green text color
    >
      <Flex mb={4} justify="flex-end">
        <Input
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          width="250px"
          bg="#a5d6a7" // Light green input background
          color="#ffffff" // White text color
          borderColor="#388e3c" // Green border
        />
      </Flex>
      <Table 
        variant="simple" 
        sx={{ tableLayout: "fixed" }}
        bg="white" // White background for the table
      >
        <Thead>
          <Tr bg="#388e3c"> {/* Dark green header background */}
            <Th color="white">Product Name</Th>
            <Th color="white">Category</Th>
            <Th color="white">SKU</Th>
            <Th color="white">Date</Th>
            <Th color="white">Quantity</Th>
            <Th color="white">Promise Date</Th>
            <Th color="white">Customers</Th>
            <Th color="white">Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {currentItems.map((item) => (
            <Tr 
              key={item.id} 
              _hover={{ bg: "#a5d6a7" }} // Light green hover effect
            >
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
        sx={{
          '.page-item .page-link': {
            backgroundColor: '#388e3c', // Green background for pagination buttons
            color: '#ffffff', // White text
          },
          '.page-item.active .page-link': {
            backgroundColor: '#1b5e20', // Darker green for active page
            color: '#ffffff', // White text
          },
        }}
      />
    </Box>
  );
};

export default ProductTable;
