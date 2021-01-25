import styled from 'styled-components';

export const LaunchpadContainer = styled.div`
    padding: 50px 20px;
`;

export const LauchpadSelectWrapper = styled.div`
    display: flex;
    .launchpad-label {
        font-size: 20px;
    }
    .launchpad-list {
        margin-left: 10px;
        width: 200px;
        height: 24px;
    }
`;

export const LauchpadDetailsContainer = styled.div`
    width: 100%;
`;

export const LoadingMessageContainer = styled.div`
    width: 100%;

    .loading-message {
        font-size: 20px;
        margin-top: 15px;
    }
`;

export const LaunchPadInfoContainer = styled.div`
    margin: 20px 0;
    .launchpad-info-row {
        display: flex;
        padding: 10px;
        .launchpad-info-column-one{
            flex: 1;
        }
        .launchpad-info-column-two{
            flex: 3;
        }
        .launchpad-info-column-three{
            flex: 10;
        }
    }
    .row-odd {
        background-color: #f9f9f9;
    }
    .row-even {
        background-color: #f1f1f1;
    }

    .title-row {
        border-bottom: 1px solid #000;
        background-color: #ffffff;
    }
`;
