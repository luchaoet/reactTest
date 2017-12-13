import React from 'react';
import { Button } from 'antd';
import { DatePicker } from 'antd';
import './index.css'

import json from './index.json'
console.log(json)




export default class Diff extends React.Component{

	constructor(props) {  
        super(props);   
        this.state = {  
            sign:0
        };  
    }  

	//耗时操作放在这里面   
    componentDidMount() {
        
    }

    set1(){
    	this.setState({
			sign: 1
		});
    }
    set2(){
    	this.setState({
			sign: 2
		});
    }

	fun(){
		return 	this.state.sign === 1 
				? <Button type="primary">Primary</Button>
				: <Button>Default</Button>
	}

	fun2(){
		return 	this.state.sign === 2 
				? <Button type="danger">Danger</Button>
				: <Button type="dashed">Dashed</Button>
	}

	fun3(){
		return 	this.state.sign === 2 
				? <DatePicker />
				: ''
	}

	render(){ 
		return (
		  	<div>
		  		<Button type="danger" onClick={this.set1.bind(this)}>设置1</Button>
		  		<Button type="danger" onClick={this.set2.bind(this)}>设置2</Button>

		  		<br />
		  		{ this.fun() }
		  		{ this.fun2() }
		  		{ this.fun3() }

		  		
		  	</div>
		) 
	}
}