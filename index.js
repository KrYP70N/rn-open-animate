import React, { useRef } from "react";
import { Animated } from 'react-native';

const extractStyle = data => {
  let temp = {}
  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      temp[key] = data[key].from
    }
  }
  return temp
}

const Anim = props => {
  const animProps = {}

  for (const key in props.to) {
    if (Object.hasOwnProperty.call(props.to, key)) {
      animProps[key] = {
        from: useRef(new Animated.Value(props.style[key])).current,
        to: props.to?.[key]
      }
    }
  }

  React.useEffect(() => {
    for (const key in animProps) {
      if (Object.hasOwnProperty.call(animProps, key)) {
        const element = animProps[key];
        Animated.timing(
          element.from,
          {
            toValue: element.to,
            duration: props.duration || 3000,
            useNativeDriver: false
          },
        ).start();
      }
    }
    extractStyle(animProps)
  }, [animProps])

  return <Animated.View style={{
    ...props.style,
    ...extractStyle(animProps)
  }}>
    {
      props.children
    }
  </Animated.View>
}

export default Anim;
