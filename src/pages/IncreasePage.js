import React from 'react';
import {SafeAreaView, Text, Button, View, StyleSheet} from 'react-native';
import {connect} from 'react-redux'
import Counter from "../components/counter";



class IncreasePage extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Counter val={this.props.secretValue}/>
          <Button
            title="Icrease"
            color = "green"
            onPress={() => {
              this.props.increase()
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

function mapStateToProps(state) {
  return {
    secretValue: state.secretValue
  }
}

function mapDispatchToProps(dispatch) {
  return {
    increase: () => dispatch({type: 'increase'}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IncreasePage);
