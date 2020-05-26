import React from 'react';

class SearchBar extends React.Component{
    
    constructor(props) { 
        super(props);
        this.state = {
            term:''
        }
    }

    inputChange = (e) => { 
        let term = e.target.value;
        this.setState({term})
        
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.getYoutubeVideos(this.state.term)
    }


    render() {
        return (
            <div className="ui segment search-bar">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                    <label>Video Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={this.inputChange}
                        />        
                        </div>
                    </form>
                </div>
        )
    }
}

export default SearchBar;