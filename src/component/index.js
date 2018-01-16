import React from 'react'
import './index.less'
import {observer} from 'mobx-react'
import Count from './Count/index'
import ChangeName from './Change/index'
import {Button} from 'antd'
import agent from '../httpSer/agent'

class Hello extends React.Component {
    constructor(props) {
        super(props)
        console.log("constructor")
        this.state = {
            age: 0
        }
    }

    componentWillMount() {
        console.log("componentWillMount")
    }

    render() {
        console.log("render")
        return (
            <div className='Hello'>
                <div>{this.props.name}</div>
                <div>{this.state.age}</div>
                <Button type="primary" onClick={() =>
                    this.setState({
                        age: this.state.age === 0 ? 111 : 0
                    })}
                >Click</Button>
            </div>
        );
    }

    componentDidMount() {
        console.log("componentDidMount")
    }

    componentWillReceiveProps() {
        console.log("componentWillReceiveProps")
    }

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate")
        return true
    }

    componentWillUpdate() {
        console.log("componentWillUpdate")
    }

    componentDidUpdate() {
        console.log("componentDidUpdate")
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
    }

    componentDidCatch() {
        console.log("componentDidCatch")
    }
}

const Coroutine = () => {
    return (
        <div className="Coroutine">
            <Button type="primary" onClick={click_button}>CoroutineTest</Button>
        </div>
    );
}

const click_button = () => {
    agent.Movies.all()
        .then(res => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(console.log("finally always invoked"))
}


const Home = observer(() => {
    return (
        <div className='Home'>
            <Count/>
            <ChangeName/>
            <Hello name="wen"/>
            <Coroutine/>
        </div>
    );
})


export default Home