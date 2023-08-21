import { BsFillClipboardDataFill } from 'react-icons/bs';
import { TbDeviceAnalytics } from "react-icons/tb";
import { MdOutlineAnalytics } from "react-icons/md";

export default function ContentCard(props) {
    return (
        <div className='mx-1'>
            <div className="col-md-3 col-sm-6 mb-3">
                <div className="container-card card border-left-primary shadow h-100">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col-8">
                                <div className="text-xs font-weight-bold text-uppercase mb-1">{props.title}</div>
                                <div className="h6 mb-0 font-weight-bold text-gray-800">{props.value} <small>{props.depth}</small></div>
                            </div>
                            <div className="col-4 text-center">
                                {props.icon === 'data' && <BsFillClipboardDataFill size={45} color="gray" />}
                                {props.icon === 'analytics' && <TbDeviceAnalytics size={45} color='gray'/>}
                                {props.icon === 'outline' && <MdOutlineAnalytics size={45} color='gray'/>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}