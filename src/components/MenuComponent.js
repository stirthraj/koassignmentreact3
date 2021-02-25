import React, {Component} from 'react';

class Menu extends Component{
    constructor(props)
    {
        super(props);
            this.state={
                infos:[{
                    id:0,
                    name: 'Tirth Raj Kumar',
                    Mobile: '7978821389'
                },
                {
                        id: 1,
                        name: 'Raj Kumar',
                        Mobile: '7978821389'
                    },
                    {
                        id: 2,
                        name: 'Kumar',
                        Mobile: '7978821389'
                    },
                    {
                        id: 3,
                        name: 'Tirth Raj Kumar',
                        Mobile: '7978821389'
                    },
                    {
                        id:4 ,
                        name: 'Raj Kumar',
                        Mobile: '7978821389'
                    },
                    {
                        id: 5,
                        name: 'Kumar',
                        Mobile: '7978821389'
                    }
                ],
            };
    }
        render()
        {
            const menu=this.state.infos.map((info)=>
            {
                return(
                    <div class="card" key={info.id}>
                        <p style={{color:"blue"}}>{info.name}</p>
                        <p>{info.Mobile}</p>
                    </div>
                );
            });

            return(
                    <div>
                    {menu}
                    </div>
            );
        }


}
export default Menu;