import {LauchpadSelectWrapper} from './launchpad.style';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
function LaunchPadSelect({ changeLaunchpad, listOfLauchPads }){
    return(
        <LauchpadSelectWrapper>
            <InputLabel htmlFor="lauchPads">List of Launchpads:</InputLabel>
            <Select native  data-testid="lauchPads" name="lauchPads" id="lauchPads" onChange={changeLaunchpad} className="launchpad-list">
                <option data-testid='' value='' >Select launchPad</option>
                {listOfLauchPads && listOfLauchPads.map(lauchPad => <option data-testid={lauchPad.id} value={lauchPad.id} key={lauchPad.id}>{lauchPad.name}</option>)}
            </Select>
        </LauchpadSelectWrapper>
    );
}

export default LaunchPadSelect;