import React from 'react'
import PropTypes from 'prop-types'

export const <%= pascalEntityName %> = ({ <%= camelEntityName %>, prop2, prop3 }) => (
  <div style={{ margin: '0 auto' }} >
    <h2><%= pascalEntityName %>: {<%= camelEntityName %>}</h2>
    <h3>Put cool stuff here</h3>
  </div>
)
Counter.propTypes = {
  <%= camelEntityName %>: PropTypes.<TYPE>.isRequired,
  prop2: PropTypes.<TYPE>.isRequired,
  prop3: PropTypes.<TYPE>.isRequired,
}

export default <%= pascalEntityName %>
