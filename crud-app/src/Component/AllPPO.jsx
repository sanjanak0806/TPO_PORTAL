import react, { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, styled } from '@mui/material'
import { getPPOs, deletePPO } from '../Service/api';
import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #000000;
        color: #FFFFFF;
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;

const AllPPOs = () => {
    const [ppos, setPPOs] = useState([]);
    
    useEffect(() => {
        getAllPPOs();
    }, []);

    const deletePPOData = async (id) => {
        await deletePPO(id);
        getAllPPOs();
    }

    const getAllPPOs = async () => {
        let response = await getPPOs();
        setPPOs(response.data);
    }

    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>Company Name</TableCell>
                    <TableCell>Batch</TableCell>
                    <TableCell>CTC</TableCell>
                    <TableCell>Detail</TableCell>
                    <TableCell></TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {ppos.map((ppo) => (
                    <TRow key={ppo.id}>
                        <TableCell>{ppo._id}</TableCell> 
                        <TableCell>{ppo.pcname}</TableCell>
                        <TableCell>{ppo.pbatch}</TableCell>
                        <TableCell>{ppo.pctc}</TableCell>
                        <TableCell>{ppo.pdetail}</TableCell>
                        
                        <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${ppo._id}`}>Edit</Button> {/* change it to user.id to use JSON Server */}
                            <Button color="secondary" variant="contained" onClick={() => deletePPOData(ppo._id)}>Delete</Button> {/* change it to user.id to use JSON Server */}
                        </TableCell>
                    </TRow>
                ))}
            </TableBody>
            {/* <Button color="primary" variant="contained" style={{marginRight:10, align:"right"}} >Add Student</Button>  */}
            <Button color="primary" variant="contained" style={{padding:"10px"}}component={Link} to="/addppo">Add Company </Button>
        </StyledTable>
    )
}

export default AllPPOs;