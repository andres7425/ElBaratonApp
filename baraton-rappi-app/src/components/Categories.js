import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


export default class Categories extends Component {


    render() {
        const { id, name, sublevels } = this.props.Categories

        const createCategoriesListTwoLevel = () => {

            if (!sublevels) {
                return [];
            }
            return sublevels
                .map(sublevel => {
                    return (
                        <React.Fragment>
                            <button type="button" class="btn btn-default dropdown-toggle"
                                data-toggle="dropdown">
                                <Categories key={id} Categories={sublevel}></Categories>


                                <span class="caret"></span>
                            </button>
                        </React.Fragment>
                    );
                });
        };

        const createCategoriesListTreeLevel = () => {

            if (!sublevels) {
                return [];
            }
            return sublevels
                .map(sublevel => {
                    return (
                        <React.Fragment>
                            <Categories key={sublevel.id} Categories={sublevel} value={sublevel.name}></Categories>
                        </React.Fragment>
                    );
                });
        };


        return (

            <CategoriWrapper classNameName="">


                <div className="btn-group">

                    <div class="btn-group">
                        <button type="button" class="btn btn-default dropdown-toggle"
                            data-toggle="dropdown">
                            {name} <span class="caret"></span>
                        </button>

                        <ul class="dropdown-menu" role="menu">


                        {createCategoriesListTwoLevel()}

                            <ul class="dropdown-menu" role="menu">
                                {createCategoriesListTreeLevel()}
                            </ul>
                        </ul>
                    </div>




                </div>

            </CategoriWrapper >

        );

    }
}

const CategoriWrapper = styled.div`

`


