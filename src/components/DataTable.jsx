import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Heading,
  Box,
} from '@chakra-ui/react';
import EditModal from './Modal';

const DataTable = ({ films, addFilm }) => {
  return (
    <TableContainer border="1px" borderColor="black" borderRadius="xl">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p="8"
        bg="red.200"
      >
        <Heading as="h1" size="xl">
          Top TV Show List
        </Heading>
        <EditModal addFilm={addFilm} />
      </Box>

      <Table variant="striped" colorScheme="red">
        <Thead bg="gray.800">
          <Tr>
            <Th>Title</Th>
            <Th>Language</Th>
            <Th>Genre(s)</Th>
            <Th isNumeric>Runtime</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {films.map(({ title, language, genre, runtime, status, id }) => (
            <Tr key={id}>
              <Td>{title}</Td>
              <Td>{language}</Td>
              <Td overflow="hidden">{genre.join(', ')}</Td>
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
