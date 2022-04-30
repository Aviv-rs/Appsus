export class BookFilter extends React.Component{
    state={
        filterBy:{
            price:'',
            name:'',
        }
    }
    handleChange=({target})=>{
        const value = (target.type === 'number') ? +target.value : target.value
        const field = target.name
        this.setState((prevState) => ({ filterBy: { ...prevState.filterBy, [field]: value } }), () => {
            this.props.onSetFilter(this.state.filterBy)
        })
    }

    onFilter=(ev)=>{
        ev.preventDefault()
        this.props.onSetFilter(this.state.filterBy)
    }

    render(){
        const {name ,price } = this.state.filterBy
        return <form className="book-filter" onSubmit={this.onFilter}>
                <h5 className="book-filter-header">Find your next book!</h5>
                <input className="book-filter-name" type="text" placeholder="Search By Book Name" value={name} onChange={this.handleChange} name="name"/>
                <input className="book-filter-price" type="number" placeholder="Search By Price" value={price} onChange={this.handleChange} name="price"/>
            <button className="book-filter-btn">Find</button>
            </form>
    }

}