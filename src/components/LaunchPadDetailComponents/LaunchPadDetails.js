import React, {useEffect ,useState} from 'react';
import { useQuery } from '@apollo/client';

import LaunchPadSelect from './LaunchPadSelect';
import LaunchPadInfo from './LaunchPadInfo';

import {LaunchpadContainer} from './launchpad.style';

import {getLaunchPadsQuery} from '../../queries/queries';

function LaunchPadDetails(){

    const [listOfLauchPads, setListOfLauchPads] = useState([]);
    const [selectedLaunchPad, setSelectedLaunchPad] = useState();
    const [showResult, setShowResult] = useState(false);

    const { data } = useQuery(getLaunchPadsQuery);

    useEffect(() => {
        if(data) setListOfLauchPads(data.launchpads);
        return( ()=>setListOfLauchPads([]));
    }, [data]);

    const changeLaunchpad = (event)=>{
        setSelectedLaunchPad(event.target.value);
        event.target.value!=='' ? setShowResult(true) : setShowResult(false) ; 
    };
    
    return(
        <LaunchpadContainer>
            <LaunchPadSelect listOfLauchPads={listOfLauchPads} changeLaunchpad={changeLaunchpad} />
            {
                showResult === true &&
                <LaunchPadInfo selectedLaunchPad={selectedLaunchPad}/>
            }
            
        </LaunchpadContainer>
    );
}

export default LaunchPadDetails;