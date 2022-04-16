import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {
    body?: JSX.Element
    className?: string
    collapsible?: boolean
    isCollapsed?: boolean
    header?: JSX.Element
    title: string
    titleIcon: string | any
    onClick?: () => void
}

const Card = ({
    body,
    className,
    collapsible,
    isCollapsed,
    header,
    title,
    titleIcon,
    onClick,
}: Props): JSX.Element => {
    const [collapsed, setCollapsed] = useState(isCollapsed)
    return (
        <div
            className={'card ' + (className ? className : '')}
            onClick={onClick}
        >
            {(title || header) && (
                <div className="card-header">
                    {header ? (
                        header
                    ) : (
                        <div className="card-title m-0">
                            <h4 className="m-0">
                                {collapsible && (
                                    <button
                                        className="btn btn-icon btn-sm mr-2"
                                        onClick={(evt) => {
                                            setCollapsed(!collapsed)
                                        }}
                                    >
                                        <FontAwesomeIcon
                                            icon={[
                                                'fas',
                                                collapsed
                                                    ? 'caret-right'
                                                    : 'caret-down',
                                            ]}
                                            className="fa-fw"
                                        />
                                    </button>
                                )}
                                {titleIcon && (
                                    <FontAwesomeIcon
                                        icon={['far', titleIcon]}
                                        className="fa-fw mr-2"
                                    />
                                )}
                                {title}
                            </h4>
                        </div>
                    )}
                </div>
            )}
            {!(collapsible && collapsed) && body && (
                <div className="card-body">{body}</div>
            )}
        </div>
    )
}

export default Card
