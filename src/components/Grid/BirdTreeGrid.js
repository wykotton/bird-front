import React from 'react';
import PropTypes from 'prop-types';
import {Row,Col,Card} from 'antd';
import BirdGrid from './BirdGrid';
import BirdTree from './BirdTree';

class BirdTreeGrid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      treeOption: this.props.treeOption,
      itemHash: {},
      selectedKeys: [],
      expandedKeys: []
    }
  }

  //树节点点击事件，不支持点选多个节点
  itemClick(clickKey) {
    this.refs.grid.setCustomData([{
      field: this.props.treeOption.paramName,
      value: clickKey
    }]);
  }

  render() {
    let self = this;
    let option = {
      ...self.state.treeOption,
      initFirstLeaf:true,
      onSelect:(key)=>self.itemClick(key)
    };

    return (<Row type="flex" justify="center">
      <Col span={4}>
        <Card title={self.props.treeOption.title}>
          <BirdTree treeOption={option}/>
        </Card>
      </Col>
      <Col span={20}>
        <BirdGrid gridOption={this.props.gridOption} ref="grid"/>
      </Col>
    </Row>)
  }
}

BirdTreeGrid.propTypes = {
  treeOption: PropTypes.shape({
    url:React.PropTypes.string.isRequired,
    title:React.PropTypes.string.isRequired,
    paramName:React.PropTypes.string.isRequired,//点击时关联的表格字段名
    textField: React.PropTypes.string,
    valueField: React.PropTypes.string,
    parentField:React.PropTypes.string,
    initialValue:React.PropTypes.string,
  }),
  gridOption:PropTypes.object.isRequired
};

export default BirdTreeGrid;