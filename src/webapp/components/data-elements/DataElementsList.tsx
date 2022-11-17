import React from "react";
import { DataElement } from "../../../domain/entities/DataElement";

export interface DataElementsListProps {
    dataElements: DataElement[];
}
export const DataElementsList: React.FC<DataElementsListProps> = props => {
    const { dataElements } = props;

    return (
        <ul>
            {dataElements.map(dataElement => (
                <li key={dataElement.id}>
                    {dataElement.name} [{dataElement.id}] [{dataElement.domain}]
                </li>
            ))}
        </ul>
    );
};
