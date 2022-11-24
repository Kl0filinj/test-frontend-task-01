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
import EditModal from './Modal';

const DataTable = ({ films, addFilm }) => {
  console.log(films);
  return (
    <TableContainer>
      <Heading as="h1" size="xl">
        Top TV Show List
      </Heading>
      <EditModal addFilm={addFilm} />
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
          {films.map(({ title, language, genre, runtime, status, id }) => (
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
