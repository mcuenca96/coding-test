const styles = {
  root: {
    display: 'flex',
    padding: '30px',
    backgroundColor: '#618685',
    color: '#FFF',
  },
  icon: {},
  title: {
    textTransform: 'uppercase' as const,
    width: '100%',
    // TODO: Typescript error thrown if not defined as const
    textAlign: 'center' as const,
  },
}

export default styles
