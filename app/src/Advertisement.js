import React, { Component } from 'react';
import NavigationBar from './AppNav'
import { Nav, Container, Form, FormGroup, Button, Label, Input } from 'reactstrap';
import { Table } from 'reactstrap';

import Moment from 'react-moment';

import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';
import Category from './Category';
import 'bootstrap/dist/css/bootstrap.min.css';


class Advertisement extends Component {

    constructor(props)
   {
       super(props)
    
       this.state={
        startDate: new Date(),
        endDate:new Date(),
        isLoading:true,
        categories:[],
        workingType:[],
        Advertisement:[],
        item:this.emptyItem

       }

       this.handleSubmit=this.handleSubmit.bind(this);
       this.handleChange=this.handleChange.bind(this);
       this.handleDateChange=this.handleDateChange.bind(this);
       this.handleCategoryChange=this.handleCategoryChange.bind(this);
       this.handleTypeChange=this.handleTypeChange.bind(this);
   }


   emptyItem={
       id:'103',
       endDate:new Date(),
       descript:'none',
       location:'',
       category:{id:1},
       workingType: {
        id: 1
    }

   };

   async componentDidMount()
   {
       const response=await fetch('/categories');
       const body=await response.json();

       this.setState({categories:body,isLoading:false});


       const adv_response=await fetch("/advertisements");
       const adv_body=await adv_response.json();
       this.setState({Advertisement:adv_body,isLoading:false});


    //Working Types
       const type_response=await fetch('/workingtypes');
       const type_body=await type_response.json();

       this.setState({workingType:type_body,isLoading:false});
   }


  

    handleChange(event){
        const target=event.target;
        const value=target.value;
        const name=target.name;

        let item={...this.state.item};
        item[name]=value;
        this.setState({item});
        console.log(this.state.item);
    }

    handleDateChange(date){
        let item={...this.state.item};
        item.endDate=date;
        this.setState({item});
    }


    handleCategoryChange(event){
        const target=event.target;
       console.log(target.value);
       let item={...this.state.item};
       item.category.id=target.value;
       this.setState({item});
       console.log(this.emptyItem);


    }
    handleTypeChange(event){

       const target=event.target;
       console.log(target.value);
       let item={...this.state.item};
       item.workingType.id=target.value;

    }


    async handleSubmit(event){
        const item=this.state.item;
        await fetch('/advertisements',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(item)
        }
        );

        console.log(this.state.item);
        //sayfayı yeniden yukler
        event.preventDefault();
        this.props.history.push('/advertisements');
    }




   async remove(id){

    await fetch("/advertisements/"+id,{
        method:'DELETE',
        headers:{
            'Accept':'application/json',
            'Content-Type':'applcation/json'
        }
    }
    ).then(()=>{
        let updatedAdv=[...this.state.Advertisement].filter(i=> i.id!==id);
        this.setState({Advertisement:updatedAdv});
    });
    //localhost:8080/expenses/4

   }
    

    render() { 

        const categories=this.state.categories;
        const isLoading=this.state.isLoading;

        const workingType=this.state.workingType;
        
        //advertisiment
        const Advertisement=this.state.Advertisement;


        //SELECT
        let options=categories.map((category)=>
            <option value={category.id} name={categories} key={category.id}>
                  {category.name}
            </option>)
    //////////////////////////////////////////


    //Select 
        let working_option=workingType.map((types)=>
        <option value={types.id}  key={types.id}>
                  {types.workingType}
            </option>
        )

        let rows=Advertisement.map( adv=>
            <tr key={adv.id}>
                <td>{adv.descript}</td>
                <td>{adv.location}</td>
                <td><Moment date={adv.endDate} format="DD/MM/YYYY"/></td> 
                <td>{adv.workingType.workingType}</td>
                <td>{adv.category.name}</td>
                <td><Button size="sm" color="danger" onClick={()=>this.remove(adv.id)}>Delete</Button></td>

            </tr>
            );



        if(isLoading){
            return(<h2>Loading...</h2>)
        }
        else{

        
        return ( 
            <div>
        <NavigationBar/>
        <h2>Advertisement</h2>
        <Container>

            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label for="title">Description</Label>{': '}
                    <Input type="text" name="descript" id="title" onChange={this.handleChange} />
                </FormGroup>

                <FormGroup>
                    <Label for="category">Category</Label>{': '}
                    <select onChange={this.handleCategoryChange}>
                        {
                            options
                        }
                    </select>
                   
                </FormGroup>


                <FormGroup>
                    <Label for="advDate">DeadLine</Label>{': '}
                    <DatePicker
                        selected={this.state.startDate}
                        onChange={this.handleDateChange}
                        />
                </FormGroup>

                <FormGroup>
                    <Label for="workingType">Working Type</Label>{': '}
                    <select onChange={this.handleTypeChange}>
                        {
                            working_option
                        }
                    </select>
                   
                </FormGroup>

                <div className="row">
                <FormGroup className="col-md-4 mb-3">
                    <Label for="location">Location</Label>{': '}
                    <Input type="text" name="location" id="location" onChange={this.handleChange} />
                </FormGroup>
                </div>

                <FormGroup>
                    <Button color="primary" type="submit">Save</Button>{' '}
                    <Button color="secondary" tag={Link} to="/categories">Cancel</Button>

                </FormGroup>

            </Form>
        </Container>

        <Container>

            <h3>Advertisement List</h3>
            <Table striped>
                <thead>
                    <tr>
                        <th width="30%">Description</th>
                        <th width="15%">Location</th>
                        <th width="20%">End Date</th>
                        <th width="15%">Type</th>
                        <th width="30%">Category</th>
                        <th width="20%">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>


            </Table>
        </Container>

        
            </div>
         );

        }
    }
}
 
export default Advertisement;