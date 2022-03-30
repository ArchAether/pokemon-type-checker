import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'


// Functional component: I'll figure it out later
// const TypeButton = ({name}) => {
//     return (
//         <div>
//             <button id={name} onClick={(name) => this.props.onClick(name)}>{name}</button>
//         </div>
//     )
// }

class TypeDisplay extends React.Component {
    render() {
        return (
            <button
                id = {this.props.name}
                type="button"
                className='typeButton btn'
                onClick={() => this.props.onClick()}>
                    {this.props.name}
            </button>
        )
    }
}

class TypeButton extends React.Component {
    render() {
        return (
            <button 
            id = {this.props.name}
            type='button'
            className='typeButton btn'
            onClick={() => this.props.onClick()}>
                {this.props.name}
            </button>
        )
    }
}

function WeaknessDisplay(props) {
    var listOfWeaknesses = props.list.map((number) =>
    <button className='typeButton btn' id={number}>{number}</button>)
        return listOfWeaknesses
}

class TypeMatchUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            types: {
                'normal': [
                    1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1,
                ],
                'fire': [
                    1, .5, 2, 1, .5, .5, 1, 1, 2, 1, 1, .5, 2, 1, 1, 1, .5, .5
                ],
                'water': [
                    1, .5, .5, 2, 2, .5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, .5, 1
                ],
                'electric': [
                    1, 1, 1, .5, 1, 1, 1, 1, 2, .5, 1, 1, 1, 1, 1, 1, .5, 1
                ],
                'grass': [
                    1, 2, .5, .5, .5, 2, 1, 2, .5, 2, 1, 2, 1, 1, 1, 1, 1, 1
                ],
                'ice': [
                    1, 2, 1, 1, 1, .5, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1
                ],
                'fighting': [
                    1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, .5, .5, 1, 1, .5, 1, 2
                ],
                'poison': [
                    1, 1, 1, 1, .5, 1, .5, .5, 2, 1, 2, .5, 1, 1, 1, 1, 1, .5
                ],
                'ground': [
                    1, 1, 2, 0, 2, 2, 1, .5, 1, 1, 1, 1, .5, 1, 1, 1, 1, 1
                ],
                'flying': [
                    1, 1, 1, 2, .5, 2, .5, 1, 0, 1, 1, .5, 2, 1, 1, 1, 1, 1
                ],
                'psychic': [
                    1, 1, 1, 1, 1, 1, .5, 1, 1, 1, .5, 2, 1, 2, 1, 2, 1, 1
                ],
                'bug': [
                    1, 2, 1, 1, .5, 1, .5, 1, .5, 2, 1, 1, 2, 1, 1, 1, 1, 1
                ],
                'rock': [
                    .5, .5, 2, 1, 2, 1, 2, .5, 2, .5, 1, 1, 1, 1, 1, 1, 2, 1
                ],
                'ghost': [
                    0, 1, 1, 1, 1, 1, 0, .5, 1, 1, 1, .5, 1, 2, 1, 2, 1, 1
                ],
                'dragon': [
                    1, .5, .5, .5, .5, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2
                ],
                'dark': [
                    1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 0, 2, 1, .5, 1, .5, 1, 2
                ],
                'steel': [
                    .5, 2, 1, 1, .5, .5, 2, 0, 2, .5, .5, .5, .5, 1, .5, 1, .5, .5
                ],
                'fairy': [
                    1, 1, 1, 1, 1, 1, .5, 2, 1, 1, 1, .5, 1, 1, 0, .5, 2, 1
                ],
                'none': [
                    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
                ]
            },
            selected1 : "none",
            selected2 : "none",
            typeNames : ['normal', 'fire', 'water', 'electric', 'grass', 'ice', 'fighting', 'poision', 'ground',
            'flying', 'psychic', 'bug', 'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy'],
            chart: [],
            effectivenessList: [["none"], ["none"], ["none"], ["none"], ["none"]],
        }
        this.weaknessChart = this.weaknessChart.bind(this)
    }

    weaknessChart(type1, type2) {
        var weaknesses
        if ((type1 in this.state.types) && (type2 in this.state.types)) {
            weaknesses = this.state.types[type1].map((value, index) => value * this.state.types[type2][index])
            console.log(weaknesses)
            return weaknesses
        }
        else {
            console.log("Error finding types!")
            return weaknesses
        }
    }

    changeType(type) {
        if((this.state.selected1 != type) && (this.state.selected2 != type)) {
            if(this.state.selected1 == "none") {
                this.setState((state) => ({
                    selected1: type
                }))
                this.setState((state) => ({
                    effectivenessList: this.findEffectiveness(state.selected1, state.selected2)
                }))
            }
            else {
                this.setState((state) => ({
                    selected2: type
                }))
                this.setState((state) => ({
                    effectivenessList: this.findEffectiveness(state.selected1, state.selected2)
                }))
            }
        }
        console.log("state: " + this.state.effectivenessList.toString())
    }
    resetType(i) {
        if(i == 0) {
            this.setState({
                selected1: this.state.selected2,
                selected2: "none"
            })
            this.setState((state) => ({
                effectivenessList: this.findEffectiveness(state.selected1, state.selected2)
            }))
        }
        else{
            this.setState({selected2: "none"})
            this.setState((state) => ({
                effectivenessList: this.findEffectiveness(state.selected1, state.selected2)
            }))
        }
    }

    findEffectiveness(type1, type2) {
        var weakness_x2 = []
        var weakness_x4 = []
        var resist_half = []       
        var resist_fourth = []
        var immune = []

        var typeNames = ['normal', 'fire', 'water', 'electric', 'grass', 'ice', 'fighting', 'poison', 'ground',
            'flying', 'psychic', 'bug', 'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy']
        var weaknessChart = this.weaknessChart(type1, type2)

        var effectivenessList = []

        weaknessChart.forEach((element, index) => {
            switch (element) {
                case 2: 
                    weakness_x2.push(typeNames[index])
                    break
                case 4:
                    weakness_x4.push(typeNames[index])
                    break
                case .5:
                    resist_half.push(typeNames[index])
                    break
                case .25:
                    resist_fourth.push(typeNames[index])
                    break
                case 0:
                    immune.push(typeNames[index])
                
            }
        })
        effectivenessList.push(weakness_x2)
        effectivenessList.push(weakness_x4)
        effectivenessList.push(resist_half)
        effectivenessList.push(resist_fourth)
        effectivenessList.push(immune)
        effectivenessList.forEach((element, index) => {
            if(effectivenessList[index].length < 1) {
                effectivenessList[index].push("none")
            }
        })
        console.log("inside Function" + effectivenessList.toString())

        return effectivenessList
    }

    render() {
        return (
            <div id= "window" className='container'>
                <div id='header' className='row'>
                    <div className='col'>
                        <h1>Type Checker</h1>
                    </div>
                    <div id='typeSelectBtn' className='col'>
                        <a className='btn btn-primary' data-bs-toggle='offcanvas' href='#offcanvas' role={"button"}>Types</a>
                    </div>
                </div>
                <div id='currentTypesOnPage'>
                    <h2>Current Types</h2>
                    <TypeDisplay name={this.state.selected1} onClick={() => this.resetType(0)} />
                    <TypeDisplay name={this.state.selected2} onClick={() => this.resetType(1)} />
                </div>
                <br></br>
                <div id='weaknessResults'>
                    <div id='weaknessRow' className='resultRow'>
                        <div className='resultHeader'>
                            <h5>Weak to:</h5>
                        </div>
                        <div className='typeList'>
                            <WeaknessDisplay list={this.state.effectivenessList[0]} />
                        </div>

                    </div>
                    <div id='weakness4xRow' className='resultRow'>
                        <div className='resultHeader'>
                            <h5>Very Weak to:</h5>
                        </div>
                        <div className='typeList'>
                            <WeaknessDisplay list={this.state.effectivenessList[1]} />
                        </div>

                    </div>
                    <div id='resistanceRow' className='resultRow'>
                        <div className='resultHeader'>
                            <h5>Resistant to:</h5>
                        </div>
                        <div className='typeList'>
                            <WeaknessDisplay list={this.state.effectivenessList[2]} />
                        </div>

                    </div>
                    <div id='resistanceFourthRow' className='resultRow'>
                        <div className='resultHeader'>
                            <h5>Very Resistant to:</h5>
                        </div>
                        <div className='typeList'>
                            <WeaknessDisplay list={this.state.effectivenessList[3]} />
                        </div>
                    </div>
                    <div id='immuneRow' className='resultRow'>
                        <div className='resultHeader'>
                            <h5>Immune to:</h5>
                        </div>
                        <div className='typeList'>
                            <WeaknessDisplay list={this.state.effectivenessList[4]} />
                        </div>
                    </div>
                    <br></br>
                    <p>Click on the Types button to begin.</p>
                    <br></br>
                </div>
                {/* offcanvas */}
                <div className='offcanvas offcanvas-end' tabIndex={'-1'} id='offcanvas' aria-labelledby='offcanvasLabel'>
                    <div className='offcanvas-header'>
                        <h5 className='offcanvas-title' id='offcanvasLabel'>Type Picker</h5>
                        <button type='button' id='closecanvas' className='btn-close text-reset' data-bs-dismiss="offcanvas" aria-label='Close'></button>
                    </div>
                    <div className='offcanvas-body'>
                        <div id='currentHeader'>
                            <h5>Current Types</h5>
                            <TypeDisplay name={this.state.selected1} onClick={() => this.resetType(0)} />
                            <TypeDisplay name={this.state.selected2} onClick={() => this.resetType(1)} />
                        </div>
                        <div id='availableTypes'>
                            <br></br>
                            <h4>Pick up to two types</h4>
                            <TypeButton name="normal" onClick={() => this.changeType("normal")} />
                            <TypeButton name="fire" onClick={() => this.changeType("fire")} />
                            <TypeButton name="water" onClick={() => this.changeType("water")} />
                            <TypeButton name="electric" onClick={() => this.changeType("electric")} />
                            <TypeButton name="grass" onClick={() => this.changeType("grass")} />
                            <TypeButton name="ice" onClick={() => this.changeType("ice")} />
                            <TypeButton name="fighting" onClick={() => this.changeType("fighting")} />
                            <TypeButton name="poison" onClick={() => this.changeType("poison")} />
                            <TypeButton name="ground" onClick={() => this.changeType("ground")} />
                            <TypeButton name="flying" onClick={() => this.changeType("flying")} />
                            <TypeButton name="psychic" onClick={() => this.changeType("psychic")} />
                            <TypeButton name="bug" onClick={() => this.changeType("bug")} />
                            <TypeButton name="rock" onClick={() => this.changeType("rock")} />
                            <TypeButton name="ghost" onClick={() => this.changeType("ghost")} />
                            <TypeButton name="dragon" onClick={() => this.changeType("dragon")} />
                            <TypeButton name="dark" onClick={() => this.changeType("dark")} />
                            <TypeButton name="steel" onClick={() => this.changeType("steel")} />
                            <TypeButton name="fairy" onClick={() => this.changeType("fairy")} />
                            <br></br>
                            <br></br>
                            <h5>How to use:</h5>
                            <p>Click on a button above to select up to two types.</p>
                            <p>Click on the currently selected type to deselect it.</p>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}

ReactDOM.render(
    <TypeMatchUp />,
    document.getElementById('root')
)