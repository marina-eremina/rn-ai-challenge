import { MaterialTopTabNavigationProp } from "@react-navigation/material-top-tabs";

export enum TabNavigationList {
  REGION = 'Region',
  NATIONAL = 'National',
  GLOBAL = 'Global',
}

export type TabNavigationParams = {
  [TabNavigationList.REGION]: undefined;
  [TabNavigationList.NATIONAL]: undefined;
  [TabNavigationList.GLOBAL]: undefined;
};

export type NavigationStackParams = MaterialTopTabNavigationProp<
  TabNavigationParams,
  TabNavigationList.GLOBAL
>;