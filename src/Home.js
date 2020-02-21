import React from 'react'

class Home extends React.Component{
    constructor(props){
        super(props);
        console.log('Constructor');
        this.state={
            boolean : false,
        }
      }
      componentWillMount(){
        console.log('1componentWillMount')
        
      }
      componentDidMount(){
        console.log('1ComponentDidMount')
      }
      componentWillReceiveProps(nextProps){
        console.log('1componentWillReceiveProps',nextProps);
      }
      shouldComponentUpdate(nextProps,nextState){
        console.log('1shouldComponentUpdate',nextProps,nextState);
        return true;
      }
      componentWillUpdate(nextProps,nextState){
        console.log('1componentWillUpdate',nextProps,nextState);
      }
      componentDidUpdate(prevProps,prevState){
        console.log('1componentDidlUpdate',prevProps,prevState); 
      }
      componentWillUnmount(){
        console.log('1componentwillUnmount');
        
      }

      // componentDidCatch(error,info){
      //     console.log('componentdidcatch',error,info);
      // }

      // static getDerivedStateFromProps(props,state){
      //   console.log('hello',props,state)
      // }

      onchange=()=>{
          console.log('onchange')
          this.setState({boolean : !this.state.boolean})
      }
    render () {
        let c = (
            this.state.boolean ? (<h1>Child page</h1>) : null
        ) 
        return (
            <div>
              {console.log('render')}
            <button onClick={this.onchange} >Change</button>
                <h2 >{this.props.boolean}</h2>

                {c}
            </div>
        );
        }

}


export default Home