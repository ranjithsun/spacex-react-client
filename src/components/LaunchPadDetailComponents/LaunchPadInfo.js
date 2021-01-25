import React, {useEffect ,useState} from 'react';
import { useQuery } from '@apollo/client';

import {LauchpadDetailsContainer, LoadingMessageContainer, LaunchPadInfoContainer} from './launchpad.style';
import {getLaunchPadDetailQuery} from '../../queries/queries';

function LaunchPadInfo({selectedLaunchPad}){

    const [failedLauchList, setFailedLauchList] = useState([]);

    const { loading, data } = useQuery(getLaunchPadDetailQuery, {variables:{id:selectedLaunchPad}});

    useEffect(()=>{
        if(data) setFailedLauchList(data.launchpad);
    },[failedLauchList, selectedLaunchPad, data]);

    if (loading) 
        return <LauchpadDetailsContainer>
                <LoadingMessageContainer>
                    <div className="loading-message">Loading...</div>
                </LoadingMessageContainer>
            </LauchpadDetailsContainer>;

    return(
        <LauchpadDetailsContainer data-testid="lauchpad-failure-container">
            <LaunchPadInfoContainer data-testid="failure-list-container">
                <div className="launchpad-info-row">
                    <div className="launchpad-info-column-one">Name</div>
                    <div className="launchpad-info-column-two">{failedLauchList.name}</div>
                </div>
                <div className="launchpad-info-row">
                    <div className="launchpad-info-column-one">Details</div>
                    <div className="launchpad-info-column-two">{failedLauchList.details}</div>
                </div>
                <div className="launchpad-info-row">
                    <div className="launchpad-info-column-one">Status</div>
                    <div className="launchpad-info-column-two">{failedLauchList.status}</div>
                </div>
                <div className="launchpad-info-row">
                    <div className="launchpad-info-column-one">Attempted Launches</div>
                    <div className="launchpad-info-column-two">{failedLauchList.attempted_launches}</div>
                </div>
                <div className="launchpad-info-row">
                    <div className="launchpad-info-column-one">Successful Launches</div>
                    <div className="launchpad-info-column-two">{failedLauchList.successful_launches}</div>
                </div>
            </LaunchPadInfoContainer>
        </LauchpadDetailsContainer>
    );
}
export default LaunchPadInfo;