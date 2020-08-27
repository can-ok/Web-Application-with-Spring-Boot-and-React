import React,{Component} from 'react';
import NavigationBar from './AppNav'
import { Table,Nav, Container, Form, FormGroup, Button, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Category extends Component {
    state = { 
        isLoading:true,
        Categories:[],
        workingType:[]
     }


    async componentDidMount(){
        const response=await fetch('/categories')
        const body=await response.json();

        this.setState({Categories:body,isLoading:false});


         //Working Types
       const type_response=await fetch('/workingtypes');
       const type_body=await type_response.json();

       this.setState({workingType:type_body,isLoading:false});
    }

    render() { 
        const {Categories,isLoading,workingType}=this.state;

        let categories=Categories.map(category =>
            <tr key={category.id}>
            <td>{category.id}</td>
            <td>{category.name}</td>
           </tr> );


    let works=workingType.map(type =>
        <tr key={type.id}>
        <td>{type.id}</td>
        <td>{type.workingType}</td>
        <td>{type.workingHour}</td>

    </tr> );

        if(isLoading)
        {
            return(<h1>...Loading</h1>);
        }
        else
        {
            return( 
                <div>
                <NavigationBar/>

                <Container>
                    
                    <h3>Category List</h3>
                    <Table striped>
                        <thead>
                            <tr>
                                <th width="30%">ID</th>
                                <th width="15%">Name</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {categories}
                        </tbody>
        
        
                    </Table>
                </Container>

                <Container>
                    
                    <h3>Working Types List</h3>
                    <Table striped>
                        <thead>
                            <tr>
                                <th width="30%">ID</th>
                                <th width="15%">Name</th>
                                <th width="15%">Hour</th>

                                
                            </tr>
                        </thead>
                        <tbody>
                            {works}
                        </tbody>
        
        
                    </Table>
                </Container>
                
                </div>);
                            
                                
                    


        }
            
       
    }
}
 
export default Category;