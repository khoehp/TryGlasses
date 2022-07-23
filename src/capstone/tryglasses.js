import React, { Component } from "react";
import styles from "./style.module.css";
import dataGlasses from "./dataGlasses.json";
import clsx from "clsx";

export class Tryglasses extends Component {
  state = {
    glassImg: dataGlasses[0].url,
    glassName: dataGlasses[0].name,
    glassDesc: dataGlasses[0].desc,
  };

  changeGlasses = (item) => {
    // console.log(item);
    this.setState(
      {
        glassImg: item.url,
        glassName: item.name,
        glassDesc: item.desc,
      },
      () => {}
    );
  };

  renderGlass = () => {
    return dataGlasses.map((item) => {
      return (
        <button
          className={clsx(styles.btn)}
          key={item.id}
          onClick={() => {
            this.changeGlasses(item);
          }}
        >
          <img
            className={clsx(styles.img_content)}
            src={item.url}
            alt={item.url}
          />
        </button>
      );
    });
  };

  renderContent = () => {
    return (
      <div className={clsx(styles.title)}>
        <div className={clsx(styles.title_top)}>{this.state.glassName}</div>
        <div className={clsx(styles.title_bottom)}>{this.state.glassDesc}</div>
      </div>
    );
  };

  render() {
    return (
      <div className={clsx(styles.bg)}>
        <header className={clsx(styles.header)}>
          <h1>TRY GLASSES APP ONLINE</h1>
        </header>
        <div className={clsx(styles.model)}>
          <div>
            <div className={clsx(styles.item)}>
              <img
                className={clsx(styles.img_model)}
                src="./glassesImage/model.jpg"
                alt="model"
              />
              <div className={clsx(styles.item_content)}>
                <img
                  className={clsx(styles.change_img)}
                  src={this.state.glassImg}
                  alt={this.state.glassImg}
                />
              </div>
              
              {this.renderContent()}
            </div>
          </div>
          <div>
            <img
              className={clsx(styles.img_model)}
              src="./glassesImage/model.jpg"
              alt="model1"
            />
          </div>
        </div>

        <div className={clsx(styles.content)}>{this.renderGlass()}</div>
      </div>
    );
  }
}

export default Tryglasses;
