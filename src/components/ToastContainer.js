import React from 'react';
import { Toast } from '@';

export class ToastContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showToast: false };
  }

  handleShowToast() {
    this.setState({ showToast: true });
    setTimeout(() => {
      this.setState({ showToast: false });
    }, 1000);
  }

  render() {
    const toast = this.state.showToast ? <Toast mode="error" /> : null;
    return (
      <div className="toastContainer">
        <button type="button" onClick={() => this.handleShowToast()}>Click</button>
        {toast}
      </div>
    );
  }
}
