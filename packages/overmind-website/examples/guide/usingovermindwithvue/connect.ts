export default () => [
  {
    fileName: 'overmind/index.jsx',
    code: `
import { Overmind } from 'overmind'
import { createConnect } from 'overmind-vue'

const overmind = new Overmind({
  state: {},
  actions: {}
})

export const connect = createConnect(overmind)
`,
  },
  {
    fileName: 'components/SomeComponent.vue (template)',
    code: `
<div v-on:click="overmind.actions.onClick">
  {{overmind.state.foo}}
</div>
`,
  },
  {
    fileName: 'components/SomeComponent.vue (script)',
    code: `
import { connect } from '../overmind'

export default connect({})
`,
  },
]
