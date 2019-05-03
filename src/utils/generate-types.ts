import { generate } from '@graphql-codegen/cli';
import { TypeScriptPluginConfig } from '@graphql-codegen/typescript'
import { TypeScriptDocumentsPluginConfig } from '@graphql-codegen/typescript-operations'

export function generateTypes() {
    const config = {
        from: 'http://localhost:1337/graphql',
        to: 'src/generated/schema-types.ts'
    }
    console.log('Generating type definitions from GraphQL schema', config)

    const tsPluginConfig: TypeScriptPluginConfig = {
        namingConvention: 'keep',
        typesPrefix: 'I'
    }

    return generate({
        schema: config.from,
        documents: 'src/**/*.graphql',
        generates: {
            [config.to]: {
                plugins: ['typescript', 'typescript-operations'],
                config: {
                    ...tsPluginConfig,
                }
            }
        },
        overwrite: true,
    }).catch(e => console.error(e))
}
