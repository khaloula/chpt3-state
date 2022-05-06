import React, { Component } from 'react'

export default class Person extends Component {
    constructor (props){
        super(props)
        this.state={
            fullname:"khalil",
            bio:"this is my bio",
            profession:"this is my profession",
            imgSrc:"https://images.unsplash.com/photo-1612896488082-7271dc0ed30c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ2fHxwZXJzb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        }
        this.state= {count: 0}
    }
    componentDidMount () {
        setInterval(() =>{
            this.setState(prevState =>({
                count: prevState.count + 1
            }
                
            ))
        }, 1000)
    }
    

    componentWillUnmount(){
        clearInterval(this.state)
    }
    render() {
    return (
        
    <div>
        <h3>{this.Person.fullname}</h3>
        <h3>{this.Person.bio}</h3>
        <h3>{this.Person.fullname}</h3>
        <img src={this.Person.imgSrc} alt="person"/>
        <div>counter: {this.Person.count}</div>
    </div>
    )
}
}
