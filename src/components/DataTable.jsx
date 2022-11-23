import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Heading,
} from '@chakra-ui/react';

const DataTable = ({ films }) => {
  return (
    <TableContainer>
      <Heading as="h1" size="xl">
        Top TV Show List
      </Heading>

      <Table variant="striped" colorScheme="red">
        <Thead>
          <Tr>
            <Th>Title</Th>
            <Th>Language</Th>
            <Th>Genre(s)</Th>
            <Th isNumeric>Runtime</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {films.map(({ id, title, language, genre, runtime, status }) => (
            <Tr key={id}>
              <Td>{title}</Td>
              <Td>{language}</Td>
              <Td>{genre}</Td>
              <Td isNumeric>{runtime}</Td>
              <Td>{status}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
