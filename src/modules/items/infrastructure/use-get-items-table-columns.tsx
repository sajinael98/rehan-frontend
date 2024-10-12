import { ColumnDef } from "@tanstack/react-table";
import { useMemo } from "react";
import { ItemResponse } from "../types";
import { Button } from "@mantine/core";

export function useGetItemsTableColumns() {
    return useMemo<ColumnDef<ItemResponse>[]>(() => [
        {
            accessorKey: "title",
            header: "Title"
        },
        {
            accessorKey: "category",
            header: "Category",
            cell({getValue}) {
                return <Button>{getValue() as string}</Button>
            },
        }
    ], [])
}