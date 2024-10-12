"use client"

import ResourceListPage from '@components/ResourceListPage';
import { categorySchema, useGetCategoryColumns } from '@modules/categories/infastructure';
import { CategoryForm } from '@modules/categories/presentation';

const CategoriesListPage = () => {
    const columns = useGetCategoryColumns()

    return <ResourceListPage
        menuItems={[
            {
                label: 'show alert',
                onClick(rows) {
                    alert(rows)
                },
            }
        ]}
        columns={columns}
        formDialog={{
            form: <CategoryForm />,
            schema: categorySchema
        }}
    />
}

export default CategoriesListPage