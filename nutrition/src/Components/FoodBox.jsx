import React, { Component } from 'react'


export default class FoodBox extends Component {

    constructor() {
        super();
        this.state = {
            value: 0,
            cal : 0
        };
    }
    

    changeinp =(e)=>{
        this.setState(()=>{
            return{
                value : e.target.value,
                cal : 0
            }
        })
    }

    AddingCal = (cal)=>{
        this.setState(()=>{
            return{
                value : this.state.value,
                cal : this.state.value * cal
            }
        })
    }

    reset=()=>{
        this.setState(()=>{
            return{
                value : this.state.value = 0,
                cal : 0
            }
        })
    }
    render() {
        let data = this.props.props1;
        console.log(data)
        return (
            <>
                <div className="box">
                    <article className="left">
                        <div >
                            <div>
                                <img src={data.img} />
                            </div>
                        </div>
                        <div >
                            <div>
                                <p>
                                    <strong>{data.name}</strong> <br />
                                    <div>{data.cal}</div>
                                </p>
                            </div>
                        </div>
                        <div >
                            <div className="quantity">
                                <div className="control">
                                    <input className="input" type="number" value={this.state.value} onChange={this.changeinp}/>
                                </div>
                                <div className="control">
                                    <button className="button is-info" onClick={()=>this.AddingCal(data.cal)}>
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </article>
                    <div className='right'>
                        <div>{data.name}  {this.state.value} = Calories {this.state.cal}</div>
                        <button onClick={this.reset}>Reset</button>
                    </div>
                </div>
            </>
        )
    }
}