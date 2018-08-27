function setReactRef(component: React.ComponentType, nodeName: string): Func {
  return function setRef(ref: React.Ref): React.Ref {
    return (component[nodeName] = ref); //eslint-disable-line
  };
}

export default setReactRef;
