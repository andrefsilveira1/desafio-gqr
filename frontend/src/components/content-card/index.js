import { BsFillClipboardDataFill } from 'react-icons/bs';

export default function ContentCard(props) {
    return (
        <div className='px-1'>
            <div className="col-md-3 col-sm-6 mb-3">
                <div className="container-card card border-left-primary shadow h-100">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col-8">
                                <div className="text-xs font-weight-bold text-uppercase mb-1">{props.title}</div>
                                <div className="h6 mb-0 font-weight-bold text-gray-800">{props.value} <small>{props.depth}</small></div>
                            </div>
                            <div className="col-4 text-center">
                                <BsFillClipboardDataFill size={28} color="gray" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}