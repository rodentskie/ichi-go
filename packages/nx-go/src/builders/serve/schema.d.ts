import { JsonObject } from '@angular-devkit/core'

export interface BuildBuilderSchema extends JsonObject {
  outputPath: string
  main: string
}
