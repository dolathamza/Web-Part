import React from 'react';
// import {Table, TableBody, TableHead, TableRow, TableCell} from "@mui/material";
// import {Table} from 'antd';
import {getAllLabs} from '../firebaseFirestore';
import {get_all_labs, labs_loading} from '../redux/types';
import {useDispatch, useSelector} from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import {useRouter} from 'next/router';

// material ui
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';


const columns = [
    {id: 'name', label: 'Name', minWidth: 170},
    {id: 'formatted_address', label: 'Formatted Address', minWidth: 100},
    {
        id: 'user_ratings_total',
        label: 'Total Ratings',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'rating',
        label: 'Rating',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },

]

// const columns = [
//     {
//         title: 'Name',
//         dataIndex: 'name',
//         key: 'name',
//     },
//     {
//         title: 'Formatted Address',
//         dataIndex: 'formatted_address',
//         key: 'formatted_address',
//     },
//     {
//         title: 'Total Ratings',
//         dataIndex: 'user_ratings_total',
//         key: 'user_ratings_total',
//     },
//     {
//         title: 'Rating',
//         dataIndex: 'rating',
//         key: 'rating',
//     },
//     {
//         title: 'See details',
//         dataIndex: 'id',
//         key: 'id',
//     },

// ];

function createData(name, code, population, size) {
    const density = population / size;
    return {name, code, population, size, density};
}

//   const rows = [
//     createData('India', 'IN', 1324171354, 3287263),
//     createData('China', 'CN', 1403500365, 9596961),
//     createData('Italy', 'IT', 60483973, 301340),
//     createData('United States', 'US', 327167434, 9833520),
//     createData('Canada', 'CA', 37602103, 9984670),
//     createData('Australia', 'AU', 25475400, 7692024),
//     createData('Germany', 'DE', 83019200, 357578),
//     createData('Ireland', 'IE', 4857000, 70273),
//     createData('Mexico', 'MX', 126577691, 1972550),
//     createData('Japan', 'JP', 126317000, 377973),
//     createData('France', 'FR', 67022000, 640679),
//     createData('United Kingdom', 'GB', 67545757, 242495),
//     createData('Russia', 'RU', 146793744, 17098246),
//     createData('Nigeria', 'NG', 200962417, 923768),
//     createData('Brazil', 'BR', 210147125, 8515767),
//   ];

//
// const columns = [
//     {
//         title: 'Name',
//         dataIndex: 'name',
//         key: 'name',
//     },
//     {
//         title: 'Formatted Address',
//         dataIndex: 'formatted_address',
//         key: 'formatted_address',
//     },
//     {
//         title: 'Total Ratings',
//         dataIndex: 'user_ratings_total',
//         key: 'user_ratings_total',
//     },
//     {
//         title: 'Rating',
//         dataIndex: 'rating',
//         key: 'rating',
//     },
//     {
//         title: 'See details',
//         dataIndex: 'id',
//         key: 'id',
//     },

// ];

const rows = [
    {
        id: "1",

        formatted_address: "str1",
        name: "test",
        photo: "url",
        place_id: "ChIJreyvwSOl3zgRn5Gx_878NK0",
        rating: "3.2",
        user_ratings_total: 5,
        geometry: {
            location: {
                lat: 12312,
                lng: 24234
            },
            viewport: {
                notrheast: {
                    lat: 12312,
                    lng: 24234
                },
                soutrhwest: {
                    lat: 12312,
                    lng: 24234
                }
            }
        }
    },
    {
        id: "2",

        formatted_address: "str2",
        name: "test name",
        photo: "url",
        place_id: "ChIJreyvwSOl3zgRn5Gx_878NK0",
        rating: "3.2",
        user_ratings_total: 5,
        geometry: {
            location: {
                lat: 12312,
                lng: 24234
            },
            viewport: {
                notrheast: {
                    lat: 12312,
                    lng: 24234
                },
                soutrhwest: {
                    lat: 12312,
                    lng: 24234
                }
            }
        }
    },
    {
        id: "3",
        formatted_address: "str3",
        name: "test3",
        photo: "url",
        place_id: "ChIJreyvwSOl3zgRn5Gx_878NK0",
        rating: "3.2",
        user_ratings_total: 5,
        geometry: {
            location: {
                lat: 12312,
                lng: 24234
            },
            viewport: {
                notrheast: {
                    lat: 12312,
                    lng: 24234
                },
                soutrhwest: {
                    lat: 12312,
                    lng: 24234
                }
            }
        }
    }
]

export default function LabsData() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    var router = useRouter();
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    const {labs, labsLoading, fetched} = useSelector(state => state.Labs);
    // console.log("labs in component...", labs)
    // const [labs, setLabs] = React.useState([]);
    let dispatch = useDispatch();
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const {data} = await api.getLabsData();
    //         // console.log(data);
    //         setLabs(data);

    //     }

    //     fetchData();
    // }, [])
    React.useEffect(() => {
        async function getLabs() {
            try {

                let res = await getAllLabs();
                if (res) {
                    dispatch(get_all_labs(res));
                }
            } catch (error) {
                // console.log("error in  12345...", error)
                dispatch(labs_loading(false))

            }
        }

        if (!fetched) {
            dispatch(labs_loading(true))
            getLabs();
        }
    }, [fetched])
    if (labsLoading) {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: 300,
                flexDirection: 'column'
            }}>
                <CircularProgress color='primary' size={50}/>

                <p>Loading Labs</p>
            </div>
        )
    }
    return (
        <div style={styles.mainDiv}>

            <Paper style={styles.mainContainer} sx={{width: '100%', overflow: 'hidden'}}>
                <h1 style={styles.head}>Labs Data</h1>
                <TableContainer style={styles.tableContainer} sx={{maxHeight: 440}}>
                    <Table style={styles.table} stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{minWidth: column.minWidth}}

                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {labs
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow hover onClick={() => {
                                            // console.log("clicked...");
                                            router.push(`/labs/${row.id}`)
                                        }} role="checkbox" tabIndex={-1} key={row.id}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {column.format && typeof value === 'number'
                                                            ? column.format(value)
                                                            : value}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={labs.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>

            {!labs.length && <div style={{
                width: '100%',
                height: 100,
                color: 'red',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>Your internet is slow, Please refresh the page</div>}

        </div>
    );
}

const styles = {

    table: {
        marginBottom: '50px',
        width: '100%',
        boxShadow: '0px 0px 10px #888888',
        borderRadius: '10px',
    },
    tableContainer: {
        maxHeight: 440,
        overflow: 'auto',
        padding: '10px',
    },
    mainContainer: {
        width: '100%',
        // borderRadius: '10px',
        marginTop: '50px',
        marginBottom: '50px',
    },
    head: {
        fontSize: '50px',
        fontWeight: 'bold',
        color: '#3f51b5',
        marginBottom: '20px',
        marginTop: '20px',
        textAlign: 'center'

    },
    mainDiv: {
        padding: '40px',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '10px',
    }


}