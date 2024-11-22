/**
 * @packageDocumentation
 * Settings page.
 */
import {Fragment, useMemo} from 'react';
import {Icon} from '@defs/enums';
import {StyleSheet, Text, View} from 'react-native';
import {clearUser} from '@store/slices/user';
import {useDispatch} from 'react-redux';
import Separator from '@components/molecules/separator';
import Setting from '@components/molecules/setting';
import Template from '@components/templates/main';
import useStyle from '@hooks/useStyle';
import useLiterals from '@/app/hooks/useLiterals';

/**
 * @returns {React.JSX.Element} A React element that renders the Settings Page.
 */
export default function Settings() {
  /**
   * Hooks
   */
  const dispatch = useDispatch();
  const literals = useLiterals();
  const style = useStyle((theme, window) => {
    const {landscape} = window;
    return StyleSheet.create({
      /* Colors */
      logout: {
        color: theme.settings.item.logout,
      },
      separator: {
        color: theme.settings.separator,
      },
      /* Containers */
      logoutContainer: {
        gap: 8,
      },
      mainContainer: {
        alignItems: 'center',
        flex: 8,
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 20,
        paddingHorizontal: landscape ? 40 : 0,
        width: '100%',
      },
      sectionContainer: {
        display: 'flex',
        flexDirection: landscape ? 'row' : 'column',
        gap: landscape ? 60 : 20,
      },
      settingsContainer: {
        backgroundColor: `${theme.settings.section}33`,
        borderRadius: 20,
        alignItems: 'center',
        display: 'flex',
        padding: 5,
      },
      titleContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
      },
      /* Text */
      settingsTitle: {
        color: theme.settings.title,
        fontSize: 40,
        fontWeight: 'bold',
      },
    });
  });

  /**
   * Settings
   */
  const settings = useMemo(
    () => [
      [
        {
          callback: () => null,
          icon: {id: Icon.Account},
          text: literals.settings.items.account,
        },
        {
          callback: () => null,
          icon: {id: Icon.Notifications},
          text: literals.settings.items.notifications,
        },
        {
          callback: () => null,
          icon: {id: Icon.Language},
          text: literals.settings.items.language,
        },
        {
          callback: () => null,
          icon: {id: Icon.Appearence},
          text: literals.settings.items.appearence,
        },
      ],
      [
        {
          callback: () => null,
          icon: {id: Icon.Privacy},
          text: literals.settings.items.privacy,
        },
        {
          callback: () => null,
          icon: {id: Icon.Help},
          text: literals.settings.items.help,
        },
        {
          callback: () => null,
          icon: {id: Icon.About},
          text: literals.settings.items.about,
        },
        {
          callback: () => dispatch(clearUser()),
          caret: false,
          icon: {id: Icon.Logout, color: style.logout.color},
          style: {container: style.logoutContainer, text: style.logout},
          text: literals.settings.items.logout,
        },
      ],
    ],
    [literals, style],
  );

  /**
   * Elements
   */
  return (
    <Template>
      <View style={style.titleContainer}>
        <Text style={style.settingsTitle}>{'Ajustes'}</Text>
      </View>
      <View style={style.mainContainer}>
        <View style={style.sectionContainer}>
          {settings.map((section, sectionIndex) => {
            return (
              <View
                key={'section_' + sectionIndex}
                style={style.settingsContainer}>
                {section.map((setting, settingIndex) => {
                  const displaySeparator = settingIndex < section.length - 1;
                  return (
                    <Fragment
                      key={'fragment_' + sectionIndex + '_' + settingIndex}>
                      <Setting
                        key={'setting_' + sectionIndex + '_' + settingIndex}
                        {...setting}
                      />
                      <Separator
                        key={'separator_' + sectionIndex + '_' + settingIndex}
                        color={style.separator.color}
                        display={displaySeparator}
                      />
                    </Fragment>
                  );
                })}
              </View>
            );
          })}
        </View>
      </View>
    </Template>
  );
}
