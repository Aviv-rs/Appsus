export class LongTxt extends React.Component{
    state={
        isLongTxtShown: this.props.isLongTxtShown
    }
    onClick=()=>{
        this.setState({isLongTxtShown: !this.state.isLongTxtShown})
    }
    render(){
        const {isLongTxtShown} = this.state
        const {txt} = this.props
        const short = txt.substring(0,100)+'...'
        const isShort = (txt.length <100)
        return <span className="long-text">
            {isShort && txt}
            {!isLongTxtShown && !isShort && short}
            {isLongTxtShown && !isShort && txt}
            {!isShort && <button className="show-btn" onClick={this.onClick}>
            {!isLongTxtShown && 'More'}
            {isLongTxtShown && 'Less'} 
            </button>}
        </span>
    }
}