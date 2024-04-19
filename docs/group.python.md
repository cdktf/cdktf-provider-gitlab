# `group` Submodule <a name="`group` Submodule" id="@cdktf/provider-gitlab.group"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Group <a name="Group" id="@cdktf/provider-gitlab.group.Group"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group gitlab_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.group.Group.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import group

group.Group(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  path: str,
  auto_devops_enabled: typing.Union[bool, IResolvable] = None,
  avatar: str = None,
  avatar_hash: str = None,
  default_branch_protection: typing.Union[int, float] = None,
  description: str = None,
  emails_disabled: typing.Union[bool, IResolvable] = None,
  emails_enabled: typing.Union[bool, IResolvable] = None,
  extra_shared_runners_minutes_limit: typing.Union[int, float] = None,
  id: str = None,
  ip_restriction_ranges: typing.List[str] = None,
  lfs_enabled: typing.Union[bool, IResolvable] = None,
  membership_lock: typing.Union[bool, IResolvable] = None,
  mentions_disabled: typing.Union[bool, IResolvable] = None,
  parent_id: typing.Union[int, float] = None,
  prevent_forking_outside_group: typing.Union[bool, IResolvable] = None,
  project_creation_level: str = None,
  push_rules: GroupPushRules = None,
  request_access_enabled: typing.Union[bool, IResolvable] = None,
  require_two_factor_authentication: typing.Union[bool, IResolvable] = None,
  shared_runners_minutes_limit: typing.Union[int, float] = None,
  shared_runners_setting: str = None,
  share_with_group_lock: typing.Union[bool, IResolvable] = None,
  subgroup_creation_level: str = None,
  two_factor_grace_period: typing.Union[int, float] = None,
  visibility_level: str = None,
  wiki_access_level: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the group. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.path">path</a></code> | <code>str</code> | The path of the group. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.autoDevopsEnabled">auto_devops_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Default to Auto DevOps pipeline for all projects within this group. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.avatar">avatar</a></code> | <code>str</code> | A local path to the avatar image to upload. **Note**: not available for imported resources. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.avatarHash">avatar_hash</a></code> | <code>str</code> | The hash of the avatar image. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.defaultBranchProtection">default_branch_protection</a></code> | <code>typing.Union[int, float]</code> | See https://docs.gitlab.com/ee/api/groups.html#options-for-default_branch_protection. Valid values are: `0`, `1`, `2`, `3`, `4`. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.description">description</a></code> | <code>str</code> | The group's description. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.emailsDisabled">emails_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Disable email notifications. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.emailsEnabled">emails_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable email notifications. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.extraSharedRunnersMinutesLimit">extra_shared_runners_minutes_limit</a></code> | <code>typing.Union[int, float]</code> | Can be set by administrators only. Additional CI/CD minutes for this group. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#id Group#id}. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.ipRestrictionRanges">ip_restriction_ranges</a></code> | <code>typing.List[str]</code> | A list of IP addresses or subnet masks to restrict group access. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.lfsEnabled">lfs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable/disable Large File Storage (LFS) for the projects in this group. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.membershipLock">membership_lock</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Users cannot be added to projects in this group. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.mentionsDisabled">mentions_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Disable the capability of a group from getting mentioned. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.parentId">parent_id</a></code> | <code>typing.Union[int, float]</code> | Id of the parent group (creates a nested group). |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.preventForkingOutsideGroup">prevent_forking_outside_group</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defaults to false. When enabled, users can not fork projects from this group to external namespaces. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.projectCreationLevel">project_creation_level</a></code> | <code>str</code> | Determine if developers can create projects in the group. Valid values are: `noone`, `maintainer`, `developer`. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.pushRules">push_rules</a></code> | <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules">GroupPushRules</a></code> | push_rules block. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.requestAccessEnabled">request_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow users to request member access. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.requireTwoFactorAuthentication">require_two_factor_authentication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Require all users in this group to setup Two-factor authentication. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.sharedRunnersMinutesLimit">shared_runners_minutes_limit</a></code> | <code>typing.Union[int, float]</code> | Can be set by administrators only. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.sharedRunnersSetting">shared_runners_setting</a></code> | <code>str</code> | Enable or disable shared runners for a group’s subgroups and projects. Valid values are: `enabled`, `disabled_and_overridable`, `disabled_and_unoverridable`, `disabled_with_override`. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.shareWithGroupLock">share_with_group_lock</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Prevent sharing a project with another group within this group. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.subgroupCreationLevel">subgroup_creation_level</a></code> | <code>str</code> | Allowed to create subgroups. Valid values are: `owner`, `maintainer`. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.twoFactorGracePeriod">two_factor_grace_period</a></code> | <code>typing.Union[int, float]</code> | Defaults to 48. Time before Two-factor authentication is enforced (in hours). |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.visibilityLevel">visibility_level</a></code> | <code>str</code> | The group's visibility. Can be `private`, `internal`, or `public`. Valid values are: `private`, `internal`, `public`. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.wikiAccessLevel">wiki_access_level</a></code> | <code>str</code> | The group's wiki access level. Only available on Premium and Ultimate plans. Valid values are `disabled`, `private`, `enabled`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.name"></a>

- *Type:* str

The name of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#name Group#name}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.path"></a>

- *Type:* str

The path of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#path Group#path}

---

##### `auto_devops_enabled`<sup>Optional</sup> <a name="auto_devops_enabled" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.autoDevopsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Default to Auto DevOps pipeline for all projects within this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#auto_devops_enabled Group#auto_devops_enabled}

---

##### `avatar`<sup>Optional</sup> <a name="avatar" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.avatar"></a>

- *Type:* str

A local path to the avatar image to upload. **Note**: not available for imported resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#avatar Group#avatar}

---

##### `avatar_hash`<sup>Optional</sup> <a name="avatar_hash" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.avatarHash"></a>

- *Type:* str

The hash of the avatar image.

Use `filesha256("path/to/avatar.png")` whenever possible. **Note**: this is used to trigger an update of the avatar. If it's not given, but an avatar is given, the avatar will be updated each time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#avatar_hash Group#avatar_hash}

---

##### `default_branch_protection`<sup>Optional</sup> <a name="default_branch_protection" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.defaultBranchProtection"></a>

- *Type:* typing.Union[int, float]

See https://docs.gitlab.com/ee/api/groups.html#options-for-default_branch_protection. Valid values are: `0`, `1`, `2`, `3`, `4`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#default_branch_protection Group#default_branch_protection}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.description"></a>

- *Type:* str

The group's description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#description Group#description}

---

##### `emails_disabled`<sup>Optional</sup> <a name="emails_disabled" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.emailsDisabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable email notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#emails_disabled Group#emails_disabled}

---

##### `emails_enabled`<sup>Optional</sup> <a name="emails_enabled" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.emailsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable email notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#emails_enabled Group#emails_enabled}

---

##### `extra_shared_runners_minutes_limit`<sup>Optional</sup> <a name="extra_shared_runners_minutes_limit" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.extraSharedRunnersMinutesLimit"></a>

- *Type:* typing.Union[int, float]

Can be set by administrators only. Additional CI/CD minutes for this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#extra_shared_runners_minutes_limit Group#extra_shared_runners_minutes_limit}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#id Group#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_restriction_ranges`<sup>Optional</sup> <a name="ip_restriction_ranges" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.ipRestrictionRanges"></a>

- *Type:* typing.List[str]

A list of IP addresses or subnet masks to restrict group access.

Will be concatenated together into a comma separated string. Only allowed on top level groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#ip_restriction_ranges Group#ip_restriction_ranges}

---

##### `lfs_enabled`<sup>Optional</sup> <a name="lfs_enabled" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.lfsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable/disable Large File Storage (LFS) for the projects in this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#lfs_enabled Group#lfs_enabled}

---

##### `membership_lock`<sup>Optional</sup> <a name="membership_lock" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.membershipLock"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Users cannot be added to projects in this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#membership_lock Group#membership_lock}

---

##### `mentions_disabled`<sup>Optional</sup> <a name="mentions_disabled" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.mentionsDisabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable the capability of a group from getting mentioned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#mentions_disabled Group#mentions_disabled}

---

##### `parent_id`<sup>Optional</sup> <a name="parent_id" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.parentId"></a>

- *Type:* typing.Union[int, float]

Id of the parent group (creates a nested group).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#parent_id Group#parent_id}

---

##### `prevent_forking_outside_group`<sup>Optional</sup> <a name="prevent_forking_outside_group" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.preventForkingOutsideGroup"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defaults to false. When enabled, users can not fork projects from this group to external namespaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#prevent_forking_outside_group Group#prevent_forking_outside_group}

---

##### `project_creation_level`<sup>Optional</sup> <a name="project_creation_level" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.projectCreationLevel"></a>

- *Type:* str

Determine if developers can create projects in the group. Valid values are: `noone`, `maintainer`, `developer`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#project_creation_level Group#project_creation_level}

---

##### `push_rules`<sup>Optional</sup> <a name="push_rules" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.pushRules"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.group.GroupPushRules">GroupPushRules</a>

push_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#push_rules Group#push_rules}

---

##### `request_access_enabled`<sup>Optional</sup> <a name="request_access_enabled" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.requestAccessEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow users to request member access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#request_access_enabled Group#request_access_enabled}

---

##### `require_two_factor_authentication`<sup>Optional</sup> <a name="require_two_factor_authentication" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.requireTwoFactorAuthentication"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Require all users in this group to setup Two-factor authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#require_two_factor_authentication Group#require_two_factor_authentication}

---

##### `shared_runners_minutes_limit`<sup>Optional</sup> <a name="shared_runners_minutes_limit" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.sharedRunnersMinutesLimit"></a>

- *Type:* typing.Union[int, float]

Can be set by administrators only.

Maximum number of monthly CI/CD minutes for this group. Can be nil (default; inherit system default), 0 (unlimited), or > 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#shared_runners_minutes_limit Group#shared_runners_minutes_limit}

---

##### `shared_runners_setting`<sup>Optional</sup> <a name="shared_runners_setting" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.sharedRunnersSetting"></a>

- *Type:* str

Enable or disable shared runners for a group’s subgroups and projects. Valid values are: `enabled`, `disabled_and_overridable`, `disabled_and_unoverridable`, `disabled_with_override`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#shared_runners_setting Group#shared_runners_setting}

---

##### `share_with_group_lock`<sup>Optional</sup> <a name="share_with_group_lock" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.shareWithGroupLock"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Prevent sharing a project with another group within this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#share_with_group_lock Group#share_with_group_lock}

---

##### `subgroup_creation_level`<sup>Optional</sup> <a name="subgroup_creation_level" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.subgroupCreationLevel"></a>

- *Type:* str

Allowed to create subgroups. Valid values are: `owner`, `maintainer`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#subgroup_creation_level Group#subgroup_creation_level}

---

##### `two_factor_grace_period`<sup>Optional</sup> <a name="two_factor_grace_period" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.twoFactorGracePeriod"></a>

- *Type:* typing.Union[int, float]

Defaults to 48. Time before Two-factor authentication is enforced (in hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#two_factor_grace_period Group#two_factor_grace_period}

---

##### `visibility_level`<sup>Optional</sup> <a name="visibility_level" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.visibilityLevel"></a>

- *Type:* str

The group's visibility. Can be `private`, `internal`, or `public`. Valid values are: `private`, `internal`, `public`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#visibility_level Group#visibility_level}

---

##### `wiki_access_level`<sup>Optional</sup> <a name="wiki_access_level" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.wikiAccessLevel"></a>

- *Type:* str

The group's wiki access level. Only available on Premium and Ultimate plans. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#wiki_access_level Group#wiki_access_level}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.Group.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.group.Group.putPushRules">put_push_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetAutoDevopsEnabled">reset_auto_devops_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetAvatar">reset_avatar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetAvatarHash">reset_avatar_hash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetDefaultBranchProtection">reset_default_branch_protection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetEmailsDisabled">reset_emails_disabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetEmailsEnabled">reset_emails_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetExtraSharedRunnersMinutesLimit">reset_extra_shared_runners_minutes_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetIpRestrictionRanges">reset_ip_restriction_ranges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetLfsEnabled">reset_lfs_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetMembershipLock">reset_membership_lock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetMentionsDisabled">reset_mentions_disabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetParentId">reset_parent_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetPreventForkingOutsideGroup">reset_prevent_forking_outside_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetProjectCreationLevel">reset_project_creation_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetPushRules">reset_push_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetRequestAccessEnabled">reset_request_access_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetRequireTwoFactorAuthentication">reset_require_two_factor_authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetSharedRunnersMinutesLimit">reset_shared_runners_minutes_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetSharedRunnersSetting">reset_shared_runners_setting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetShareWithGroupLock">reset_share_with_group_lock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetSubgroupCreationLevel">reset_subgroup_creation_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetTwoFactorGracePeriod">reset_two_factor_grace_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetVisibilityLevel">reset_visibility_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetWikiAccessLevel">reset_wiki_access_level</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.group.Group.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-gitlab.group.Group.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.group.Group.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.group.Group.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-gitlab.group.Group.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-gitlab.group.Group.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-gitlab.group.Group.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-gitlab.group.Group.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-gitlab.group.Group.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-gitlab.group.Group.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-gitlab.group.Group.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.group.Group.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.group.Group.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.group.Group.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.group.Group.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.group.Group.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.group.Group.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.group.Group.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.group.Group.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.group.Group.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.group.Group.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.group.Group.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.group.Group.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.group.Group.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.group.Group.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.group.Group.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.group.Group.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.group.Group.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.group.Group.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.group.Group.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-gitlab.group.Group.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-gitlab.group.Group.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.group.Group.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.group.Group.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.group.Group.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.group.Group.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-gitlab.group.Group.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.group.Group.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-gitlab.group.Group.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-gitlab.group.Group.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.group.Group.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-gitlab.group.Group.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.group.Group.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_push_rules` <a name="put_push_rules" id="@cdktf/provider-gitlab.group.Group.putPushRules"></a>

```python
def put_push_rules(
  author_email_regex: str = None,
  branch_name_regex: str = None,
  commit_committer_check: typing.Union[bool, IResolvable] = None,
  commit_message_negative_regex: str = None,
  commit_message_regex: str = None,
  deny_delete_tag: typing.Union[bool, IResolvable] = None,
  file_name_regex: str = None,
  max_file_size: typing.Union[int, float] = None,
  member_check: typing.Union[bool, IResolvable] = None,
  prevent_secrets: typing.Union[bool, IResolvable] = None,
  reject_unsigned_commits: typing.Union[bool, IResolvable] = None
) -> None
```

###### `author_email_regex`<sup>Optional</sup> <a name="author_email_regex" id="@cdktf/provider-gitlab.group.Group.putPushRules.parameter.authorEmailRegex"></a>

- *Type:* str

All commit author emails must match this regex, e.g. `@my-company.com$`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#author_email_regex Group#author_email_regex}

---

###### `branch_name_regex`<sup>Optional</sup> <a name="branch_name_regex" id="@cdktf/provider-gitlab.group.Group.putPushRules.parameter.branchNameRegex"></a>

- *Type:* str

All branch names must match this regex, e.g. `(feature|hotfix)\/*`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#branch_name_regex Group#branch_name_regex}

---

###### `commit_committer_check`<sup>Optional</sup> <a name="commit_committer_check" id="@cdktf/provider-gitlab.group.Group.putPushRules.parameter.commitCommitterCheck"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Only commits pushed using verified emails are allowed.

**Note** This attribute is only supported in GitLab versions >= 16.4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#commit_committer_check Group#commit_committer_check}

---

###### `commit_message_negative_regex`<sup>Optional</sup> <a name="commit_message_negative_regex" id="@cdktf/provider-gitlab.group.Group.putPushRules.parameter.commitMessageNegativeRegex"></a>

- *Type:* str

No commit message is allowed to match this regex, for example `ssh\:\/\/`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#commit_message_negative_regex Group#commit_message_negative_regex}

---

###### `commit_message_regex`<sup>Optional</sup> <a name="commit_message_regex" id="@cdktf/provider-gitlab.group.Group.putPushRules.parameter.commitMessageRegex"></a>

- *Type:* str

All commit messages must match this regex, e.g. `Fixed \d+\..*`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#commit_message_regex Group#commit_message_regex}

---

###### `deny_delete_tag`<sup>Optional</sup> <a name="deny_delete_tag" id="@cdktf/provider-gitlab.group.Group.putPushRules.parameter.denyDeleteTag"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Deny deleting a tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#deny_delete_tag Group#deny_delete_tag}

---

###### `file_name_regex`<sup>Optional</sup> <a name="file_name_regex" id="@cdktf/provider-gitlab.group.Group.putPushRules.parameter.fileNameRegex"></a>

- *Type:* str

Filenames matching the regular expression provided in this attribute are not allowed, for example, `(jar|exe)$`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#file_name_regex Group#file_name_regex}

---

###### `max_file_size`<sup>Optional</sup> <a name="max_file_size" id="@cdktf/provider-gitlab.group.Group.putPushRules.parameter.maxFileSize"></a>

- *Type:* typing.Union[int, float]

Maximum file size (MB) allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#max_file_size Group#max_file_size}

---

###### `member_check`<sup>Optional</sup> <a name="member_check" id="@cdktf/provider-gitlab.group.Group.putPushRules.parameter.memberCheck"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allows only GitLab users to author commits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#member_check Group#member_check}

---

###### `prevent_secrets`<sup>Optional</sup> <a name="prevent_secrets" id="@cdktf/provider-gitlab.group.Group.putPushRules.parameter.preventSecrets"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

GitLab will reject any files that are likely to contain secrets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#prevent_secrets Group#prevent_secrets}

---

###### `reject_unsigned_commits`<sup>Optional</sup> <a name="reject_unsigned_commits" id="@cdktf/provider-gitlab.group.Group.putPushRules.parameter.rejectUnsignedCommits"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Only commits signed through GPG are allowed.  **Note** This attribute is only supported in GitLab versions >= 16.4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#reject_unsigned_commits Group#reject_unsigned_commits}

---

##### `reset_auto_devops_enabled` <a name="reset_auto_devops_enabled" id="@cdktf/provider-gitlab.group.Group.resetAutoDevopsEnabled"></a>

```python
def reset_auto_devops_enabled() -> None
```

##### `reset_avatar` <a name="reset_avatar" id="@cdktf/provider-gitlab.group.Group.resetAvatar"></a>

```python
def reset_avatar() -> None
```

##### `reset_avatar_hash` <a name="reset_avatar_hash" id="@cdktf/provider-gitlab.group.Group.resetAvatarHash"></a>

```python
def reset_avatar_hash() -> None
```

##### `reset_default_branch_protection` <a name="reset_default_branch_protection" id="@cdktf/provider-gitlab.group.Group.resetDefaultBranchProtection"></a>

```python
def reset_default_branch_protection() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-gitlab.group.Group.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_emails_disabled` <a name="reset_emails_disabled" id="@cdktf/provider-gitlab.group.Group.resetEmailsDisabled"></a>

```python
def reset_emails_disabled() -> None
```

##### `reset_emails_enabled` <a name="reset_emails_enabled" id="@cdktf/provider-gitlab.group.Group.resetEmailsEnabled"></a>

```python
def reset_emails_enabled() -> None
```

##### `reset_extra_shared_runners_minutes_limit` <a name="reset_extra_shared_runners_minutes_limit" id="@cdktf/provider-gitlab.group.Group.resetExtraSharedRunnersMinutesLimit"></a>

```python
def reset_extra_shared_runners_minutes_limit() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-gitlab.group.Group.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ip_restriction_ranges` <a name="reset_ip_restriction_ranges" id="@cdktf/provider-gitlab.group.Group.resetIpRestrictionRanges"></a>

```python
def reset_ip_restriction_ranges() -> None
```

##### `reset_lfs_enabled` <a name="reset_lfs_enabled" id="@cdktf/provider-gitlab.group.Group.resetLfsEnabled"></a>

```python
def reset_lfs_enabled() -> None
```

##### `reset_membership_lock` <a name="reset_membership_lock" id="@cdktf/provider-gitlab.group.Group.resetMembershipLock"></a>

```python
def reset_membership_lock() -> None
```

##### `reset_mentions_disabled` <a name="reset_mentions_disabled" id="@cdktf/provider-gitlab.group.Group.resetMentionsDisabled"></a>

```python
def reset_mentions_disabled() -> None
```

##### `reset_parent_id` <a name="reset_parent_id" id="@cdktf/provider-gitlab.group.Group.resetParentId"></a>

```python
def reset_parent_id() -> None
```

##### `reset_prevent_forking_outside_group` <a name="reset_prevent_forking_outside_group" id="@cdktf/provider-gitlab.group.Group.resetPreventForkingOutsideGroup"></a>

```python
def reset_prevent_forking_outside_group() -> None
```

##### `reset_project_creation_level` <a name="reset_project_creation_level" id="@cdktf/provider-gitlab.group.Group.resetProjectCreationLevel"></a>

```python
def reset_project_creation_level() -> None
```

##### `reset_push_rules` <a name="reset_push_rules" id="@cdktf/provider-gitlab.group.Group.resetPushRules"></a>

```python
def reset_push_rules() -> None
```

##### `reset_request_access_enabled` <a name="reset_request_access_enabled" id="@cdktf/provider-gitlab.group.Group.resetRequestAccessEnabled"></a>

```python
def reset_request_access_enabled() -> None
```

##### `reset_require_two_factor_authentication` <a name="reset_require_two_factor_authentication" id="@cdktf/provider-gitlab.group.Group.resetRequireTwoFactorAuthentication"></a>

```python
def reset_require_two_factor_authentication() -> None
```

##### `reset_shared_runners_minutes_limit` <a name="reset_shared_runners_minutes_limit" id="@cdktf/provider-gitlab.group.Group.resetSharedRunnersMinutesLimit"></a>

```python
def reset_shared_runners_minutes_limit() -> None
```

##### `reset_shared_runners_setting` <a name="reset_shared_runners_setting" id="@cdktf/provider-gitlab.group.Group.resetSharedRunnersSetting"></a>

```python
def reset_shared_runners_setting() -> None
```

##### `reset_share_with_group_lock` <a name="reset_share_with_group_lock" id="@cdktf/provider-gitlab.group.Group.resetShareWithGroupLock"></a>

```python
def reset_share_with_group_lock() -> None
```

##### `reset_subgroup_creation_level` <a name="reset_subgroup_creation_level" id="@cdktf/provider-gitlab.group.Group.resetSubgroupCreationLevel"></a>

```python
def reset_subgroup_creation_level() -> None
```

##### `reset_two_factor_grace_period` <a name="reset_two_factor_grace_period" id="@cdktf/provider-gitlab.group.Group.resetTwoFactorGracePeriod"></a>

```python
def reset_two_factor_grace_period() -> None
```

##### `reset_visibility_level` <a name="reset_visibility_level" id="@cdktf/provider-gitlab.group.Group.resetVisibilityLevel"></a>

```python
def reset_visibility_level() -> None
```

##### `reset_wiki_access_level` <a name="reset_wiki_access_level" id="@cdktf/provider-gitlab.group.Group.resetWikiAccessLevel"></a>

```python
def reset_wiki_access_level() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.Group.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Group resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-gitlab.group.Group.isConstruct"></a>

```python
from cdktf_cdktf_provider_gitlab import group

group.Group.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.group.Group.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-gitlab.group.Group.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_gitlab import group

group.Group.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.group.Group.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-gitlab.group.Group.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_gitlab import group

group.Group.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.group.Group.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-gitlab.group.Group.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_gitlab import group

group.Group.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Group resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.group.Group.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-gitlab.group.Group.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Group to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-gitlab.group.Group.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Group that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.group.Group.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Group to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.avatarUrl">avatar_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.fullName">full_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.fullPath">full_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.pushRules">push_rules</a></code> | <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference">GroupPushRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.runnersToken">runners_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.webUrl">web_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.autoDevopsEnabledInput">auto_devops_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.avatarHashInput">avatar_hash_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.avatarInput">avatar_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.defaultBranchProtectionInput">default_branch_protection_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.emailsDisabledInput">emails_disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.emailsEnabledInput">emails_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.extraSharedRunnersMinutesLimitInput">extra_shared_runners_minutes_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.ipRestrictionRangesInput">ip_restriction_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.lfsEnabledInput">lfs_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.membershipLockInput">membership_lock_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.mentionsDisabledInput">mentions_disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.parentIdInput">parent_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.preventForkingOutsideGroupInput">prevent_forking_outside_group_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.projectCreationLevelInput">project_creation_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.pushRulesInput">push_rules_input</a></code> | <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules">GroupPushRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.requestAccessEnabledInput">request_access_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.requireTwoFactorAuthenticationInput">require_two_factor_authentication_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.sharedRunnersMinutesLimitInput">shared_runners_minutes_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.sharedRunnersSettingInput">shared_runners_setting_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.shareWithGroupLockInput">share_with_group_lock_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.subgroupCreationLevelInput">subgroup_creation_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.twoFactorGracePeriodInput">two_factor_grace_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.visibilityLevelInput">visibility_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.wikiAccessLevelInput">wiki_access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.autoDevopsEnabled">auto_devops_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.avatar">avatar</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.avatarHash">avatar_hash</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.defaultBranchProtection">default_branch_protection</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.emailsDisabled">emails_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.emailsEnabled">emails_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.extraSharedRunnersMinutesLimit">extra_shared_runners_minutes_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.ipRestrictionRanges">ip_restriction_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.lfsEnabled">lfs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.membershipLock">membership_lock</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.mentionsDisabled">mentions_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.parentId">parent_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.preventForkingOutsideGroup">prevent_forking_outside_group</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.projectCreationLevel">project_creation_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.requestAccessEnabled">request_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.requireTwoFactorAuthentication">require_two_factor_authentication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.sharedRunnersMinutesLimit">shared_runners_minutes_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.sharedRunnersSetting">shared_runners_setting</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.shareWithGroupLock">share_with_group_lock</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.subgroupCreationLevel">subgroup_creation_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.twoFactorGracePeriod">two_factor_grace_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.visibilityLevel">visibility_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.wikiAccessLevel">wiki_access_level</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.group.Group.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-gitlab.group.Group.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.group.Group.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-gitlab.group.Group.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-gitlab.group.Group.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-gitlab.group.Group.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-gitlab.group.Group.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.group.Group.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.group.Group.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.group.Group.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.group.Group.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.group.Group.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.group.Group.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.group.Group.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `avatar_url`<sup>Required</sup> <a name="avatar_url" id="@cdktf/provider-gitlab.group.Group.property.avatarUrl"></a>

```python
avatar_url: str
```

- *Type:* str

---

##### `full_name`<sup>Required</sup> <a name="full_name" id="@cdktf/provider-gitlab.group.Group.property.fullName"></a>

```python
full_name: str
```

- *Type:* str

---

##### `full_path`<sup>Required</sup> <a name="full_path" id="@cdktf/provider-gitlab.group.Group.property.fullPath"></a>

```python
full_path: str
```

- *Type:* str

---

##### `push_rules`<sup>Required</sup> <a name="push_rules" id="@cdktf/provider-gitlab.group.Group.property.pushRules"></a>

```python
push_rules: GroupPushRulesOutputReference
```

- *Type:* <a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference">GroupPushRulesOutputReference</a>

---

##### `runners_token`<sup>Required</sup> <a name="runners_token" id="@cdktf/provider-gitlab.group.Group.property.runnersToken"></a>

```python
runners_token: str
```

- *Type:* str

---

##### `web_url`<sup>Required</sup> <a name="web_url" id="@cdktf/provider-gitlab.group.Group.property.webUrl"></a>

```python
web_url: str
```

- *Type:* str

---

##### `auto_devops_enabled_input`<sup>Optional</sup> <a name="auto_devops_enabled_input" id="@cdktf/provider-gitlab.group.Group.property.autoDevopsEnabledInput"></a>

```python
auto_devops_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `avatar_hash_input`<sup>Optional</sup> <a name="avatar_hash_input" id="@cdktf/provider-gitlab.group.Group.property.avatarHashInput"></a>

```python
avatar_hash_input: str
```

- *Type:* str

---

##### `avatar_input`<sup>Optional</sup> <a name="avatar_input" id="@cdktf/provider-gitlab.group.Group.property.avatarInput"></a>

```python
avatar_input: str
```

- *Type:* str

---

##### `default_branch_protection_input`<sup>Optional</sup> <a name="default_branch_protection_input" id="@cdktf/provider-gitlab.group.Group.property.defaultBranchProtectionInput"></a>

```python
default_branch_protection_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-gitlab.group.Group.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `emails_disabled_input`<sup>Optional</sup> <a name="emails_disabled_input" id="@cdktf/provider-gitlab.group.Group.property.emailsDisabledInput"></a>

```python
emails_disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `emails_enabled_input`<sup>Optional</sup> <a name="emails_enabled_input" id="@cdktf/provider-gitlab.group.Group.property.emailsEnabledInput"></a>

```python
emails_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `extra_shared_runners_minutes_limit_input`<sup>Optional</sup> <a name="extra_shared_runners_minutes_limit_input" id="@cdktf/provider-gitlab.group.Group.property.extraSharedRunnersMinutesLimitInput"></a>

```python
extra_shared_runners_minutes_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-gitlab.group.Group.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ip_restriction_ranges_input`<sup>Optional</sup> <a name="ip_restriction_ranges_input" id="@cdktf/provider-gitlab.group.Group.property.ipRestrictionRangesInput"></a>

```python
ip_restriction_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `lfs_enabled_input`<sup>Optional</sup> <a name="lfs_enabled_input" id="@cdktf/provider-gitlab.group.Group.property.lfsEnabledInput"></a>

```python
lfs_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `membership_lock_input`<sup>Optional</sup> <a name="membership_lock_input" id="@cdktf/provider-gitlab.group.Group.property.membershipLockInput"></a>

```python
membership_lock_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `mentions_disabled_input`<sup>Optional</sup> <a name="mentions_disabled_input" id="@cdktf/provider-gitlab.group.Group.property.mentionsDisabledInput"></a>

```python
mentions_disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-gitlab.group.Group.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parent_id_input`<sup>Optional</sup> <a name="parent_id_input" id="@cdktf/provider-gitlab.group.Group.property.parentIdInput"></a>

```python
parent_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-gitlab.group.Group.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `prevent_forking_outside_group_input`<sup>Optional</sup> <a name="prevent_forking_outside_group_input" id="@cdktf/provider-gitlab.group.Group.property.preventForkingOutsideGroupInput"></a>

```python
prevent_forking_outside_group_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project_creation_level_input`<sup>Optional</sup> <a name="project_creation_level_input" id="@cdktf/provider-gitlab.group.Group.property.projectCreationLevelInput"></a>

```python
project_creation_level_input: str
```

- *Type:* str

---

##### `push_rules_input`<sup>Optional</sup> <a name="push_rules_input" id="@cdktf/provider-gitlab.group.Group.property.pushRulesInput"></a>

```python
push_rules_input: GroupPushRules
```

- *Type:* <a href="#@cdktf/provider-gitlab.group.GroupPushRules">GroupPushRules</a>

---

##### `request_access_enabled_input`<sup>Optional</sup> <a name="request_access_enabled_input" id="@cdktf/provider-gitlab.group.Group.property.requestAccessEnabledInput"></a>

```python
request_access_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `require_two_factor_authentication_input`<sup>Optional</sup> <a name="require_two_factor_authentication_input" id="@cdktf/provider-gitlab.group.Group.property.requireTwoFactorAuthenticationInput"></a>

```python
require_two_factor_authentication_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `shared_runners_minutes_limit_input`<sup>Optional</sup> <a name="shared_runners_minutes_limit_input" id="@cdktf/provider-gitlab.group.Group.property.sharedRunnersMinutesLimitInput"></a>

```python
shared_runners_minutes_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shared_runners_setting_input`<sup>Optional</sup> <a name="shared_runners_setting_input" id="@cdktf/provider-gitlab.group.Group.property.sharedRunnersSettingInput"></a>

```python
shared_runners_setting_input: str
```

- *Type:* str

---

##### `share_with_group_lock_input`<sup>Optional</sup> <a name="share_with_group_lock_input" id="@cdktf/provider-gitlab.group.Group.property.shareWithGroupLockInput"></a>

```python
share_with_group_lock_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `subgroup_creation_level_input`<sup>Optional</sup> <a name="subgroup_creation_level_input" id="@cdktf/provider-gitlab.group.Group.property.subgroupCreationLevelInput"></a>

```python
subgroup_creation_level_input: str
```

- *Type:* str

---

##### `two_factor_grace_period_input`<sup>Optional</sup> <a name="two_factor_grace_period_input" id="@cdktf/provider-gitlab.group.Group.property.twoFactorGracePeriodInput"></a>

```python
two_factor_grace_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `visibility_level_input`<sup>Optional</sup> <a name="visibility_level_input" id="@cdktf/provider-gitlab.group.Group.property.visibilityLevelInput"></a>

```python
visibility_level_input: str
```

- *Type:* str

---

##### `wiki_access_level_input`<sup>Optional</sup> <a name="wiki_access_level_input" id="@cdktf/provider-gitlab.group.Group.property.wikiAccessLevelInput"></a>

```python
wiki_access_level_input: str
```

- *Type:* str

---

##### `auto_devops_enabled`<sup>Required</sup> <a name="auto_devops_enabled" id="@cdktf/provider-gitlab.group.Group.property.autoDevopsEnabled"></a>

```python
auto_devops_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `avatar`<sup>Required</sup> <a name="avatar" id="@cdktf/provider-gitlab.group.Group.property.avatar"></a>

```python
avatar: str
```

- *Type:* str

---

##### `avatar_hash`<sup>Required</sup> <a name="avatar_hash" id="@cdktf/provider-gitlab.group.Group.property.avatarHash"></a>

```python
avatar_hash: str
```

- *Type:* str

---

##### `default_branch_protection`<sup>Required</sup> <a name="default_branch_protection" id="@cdktf/provider-gitlab.group.Group.property.defaultBranchProtection"></a>

```python
default_branch_protection: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-gitlab.group.Group.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `emails_disabled`<sup>Required</sup> <a name="emails_disabled" id="@cdktf/provider-gitlab.group.Group.property.emailsDisabled"></a>

```python
emails_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `emails_enabled`<sup>Required</sup> <a name="emails_enabled" id="@cdktf/provider-gitlab.group.Group.property.emailsEnabled"></a>

```python
emails_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `extra_shared_runners_minutes_limit`<sup>Required</sup> <a name="extra_shared_runners_minutes_limit" id="@cdktf/provider-gitlab.group.Group.property.extraSharedRunnersMinutesLimit"></a>

```python
extra_shared_runners_minutes_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.group.Group.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_restriction_ranges`<sup>Required</sup> <a name="ip_restriction_ranges" id="@cdktf/provider-gitlab.group.Group.property.ipRestrictionRanges"></a>

```python
ip_restriction_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `lfs_enabled`<sup>Required</sup> <a name="lfs_enabled" id="@cdktf/provider-gitlab.group.Group.property.lfsEnabled"></a>

```python
lfs_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `membership_lock`<sup>Required</sup> <a name="membership_lock" id="@cdktf/provider-gitlab.group.Group.property.membershipLock"></a>

```python
membership_lock: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `mentions_disabled`<sup>Required</sup> <a name="mentions_disabled" id="@cdktf/provider-gitlab.group.Group.property.mentionsDisabled"></a>

```python
mentions_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.group.Group.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent_id`<sup>Required</sup> <a name="parent_id" id="@cdktf/provider-gitlab.group.Group.property.parentId"></a>

```python
parent_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.group.Group.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `prevent_forking_outside_group`<sup>Required</sup> <a name="prevent_forking_outside_group" id="@cdktf/provider-gitlab.group.Group.property.preventForkingOutsideGroup"></a>

```python
prevent_forking_outside_group: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project_creation_level`<sup>Required</sup> <a name="project_creation_level" id="@cdktf/provider-gitlab.group.Group.property.projectCreationLevel"></a>

```python
project_creation_level: str
```

- *Type:* str

---

##### `request_access_enabled`<sup>Required</sup> <a name="request_access_enabled" id="@cdktf/provider-gitlab.group.Group.property.requestAccessEnabled"></a>

```python
request_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `require_two_factor_authentication`<sup>Required</sup> <a name="require_two_factor_authentication" id="@cdktf/provider-gitlab.group.Group.property.requireTwoFactorAuthentication"></a>

```python
require_two_factor_authentication: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `shared_runners_minutes_limit`<sup>Required</sup> <a name="shared_runners_minutes_limit" id="@cdktf/provider-gitlab.group.Group.property.sharedRunnersMinutesLimit"></a>

```python
shared_runners_minutes_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shared_runners_setting`<sup>Required</sup> <a name="shared_runners_setting" id="@cdktf/provider-gitlab.group.Group.property.sharedRunnersSetting"></a>

```python
shared_runners_setting: str
```

- *Type:* str

---

##### `share_with_group_lock`<sup>Required</sup> <a name="share_with_group_lock" id="@cdktf/provider-gitlab.group.Group.property.shareWithGroupLock"></a>

```python
share_with_group_lock: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `subgroup_creation_level`<sup>Required</sup> <a name="subgroup_creation_level" id="@cdktf/provider-gitlab.group.Group.property.subgroupCreationLevel"></a>

```python
subgroup_creation_level: str
```

- *Type:* str

---

##### `two_factor_grace_period`<sup>Required</sup> <a name="two_factor_grace_period" id="@cdktf/provider-gitlab.group.Group.property.twoFactorGracePeriod"></a>

```python
two_factor_grace_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `visibility_level`<sup>Required</sup> <a name="visibility_level" id="@cdktf/provider-gitlab.group.Group.property.visibilityLevel"></a>

```python
visibility_level: str
```

- *Type:* str

---

##### `wiki_access_level`<sup>Required</sup> <a name="wiki_access_level" id="@cdktf/provider-gitlab.group.Group.property.wikiAccessLevel"></a>

```python
wiki_access_level: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.group.Group.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GroupConfig <a name="GroupConfig" id="@cdktf/provider-gitlab.group.GroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.group.GroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import group

group.GroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  path: str,
  auto_devops_enabled: typing.Union[bool, IResolvable] = None,
  avatar: str = None,
  avatar_hash: str = None,
  default_branch_protection: typing.Union[int, float] = None,
  description: str = None,
  emails_disabled: typing.Union[bool, IResolvable] = None,
  emails_enabled: typing.Union[bool, IResolvable] = None,
  extra_shared_runners_minutes_limit: typing.Union[int, float] = None,
  id: str = None,
  ip_restriction_ranges: typing.List[str] = None,
  lfs_enabled: typing.Union[bool, IResolvable] = None,
  membership_lock: typing.Union[bool, IResolvable] = None,
  mentions_disabled: typing.Union[bool, IResolvable] = None,
  parent_id: typing.Union[int, float] = None,
  prevent_forking_outside_group: typing.Union[bool, IResolvable] = None,
  project_creation_level: str = None,
  push_rules: GroupPushRules = None,
  request_access_enabled: typing.Union[bool, IResolvable] = None,
  require_two_factor_authentication: typing.Union[bool, IResolvable] = None,
  shared_runners_minutes_limit: typing.Union[int, float] = None,
  shared_runners_setting: str = None,
  share_with_group_lock: typing.Union[bool, IResolvable] = None,
  subgroup_creation_level: str = None,
  two_factor_grace_period: typing.Union[int, float] = None,
  visibility_level: str = None,
  wiki_access_level: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.name">name</a></code> | <code>str</code> | The name of the group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.path">path</a></code> | <code>str</code> | The path of the group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.autoDevopsEnabled">auto_devops_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Default to Auto DevOps pipeline for all projects within this group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.avatar">avatar</a></code> | <code>str</code> | A local path to the avatar image to upload. **Note**: not available for imported resources. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.avatarHash">avatar_hash</a></code> | <code>str</code> | The hash of the avatar image. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.defaultBranchProtection">default_branch_protection</a></code> | <code>typing.Union[int, float]</code> | See https://docs.gitlab.com/ee/api/groups.html#options-for-default_branch_protection. Valid values are: `0`, `1`, `2`, `3`, `4`. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.description">description</a></code> | <code>str</code> | The group's description. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.emailsDisabled">emails_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Disable email notifications. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.emailsEnabled">emails_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable email notifications. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.extraSharedRunnersMinutesLimit">extra_shared_runners_minutes_limit</a></code> | <code>typing.Union[int, float]</code> | Can be set by administrators only. Additional CI/CD minutes for this group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#id Group#id}. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.ipRestrictionRanges">ip_restriction_ranges</a></code> | <code>typing.List[str]</code> | A list of IP addresses or subnet masks to restrict group access. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.lfsEnabled">lfs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable/disable Large File Storage (LFS) for the projects in this group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.membershipLock">membership_lock</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Users cannot be added to projects in this group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.mentionsDisabled">mentions_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Disable the capability of a group from getting mentioned. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.parentId">parent_id</a></code> | <code>typing.Union[int, float]</code> | Id of the parent group (creates a nested group). |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.preventForkingOutsideGroup">prevent_forking_outside_group</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defaults to false. When enabled, users can not fork projects from this group to external namespaces. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.projectCreationLevel">project_creation_level</a></code> | <code>str</code> | Determine if developers can create projects in the group. Valid values are: `noone`, `maintainer`, `developer`. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.pushRules">push_rules</a></code> | <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules">GroupPushRules</a></code> | push_rules block. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.requestAccessEnabled">request_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow users to request member access. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.requireTwoFactorAuthentication">require_two_factor_authentication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Require all users in this group to setup Two-factor authentication. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.sharedRunnersMinutesLimit">shared_runners_minutes_limit</a></code> | <code>typing.Union[int, float]</code> | Can be set by administrators only. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.sharedRunnersSetting">shared_runners_setting</a></code> | <code>str</code> | Enable or disable shared runners for a group’s subgroups and projects. Valid values are: `enabled`, `disabled_and_overridable`, `disabled_and_unoverridable`, `disabled_with_override`. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.shareWithGroupLock">share_with_group_lock</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Prevent sharing a project with another group within this group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.subgroupCreationLevel">subgroup_creation_level</a></code> | <code>str</code> | Allowed to create subgroups. Valid values are: `owner`, `maintainer`. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.twoFactorGracePeriod">two_factor_grace_period</a></code> | <code>typing.Union[int, float]</code> | Defaults to 48. Time before Two-factor authentication is enforced (in hours). |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.visibilityLevel">visibility_level</a></code> | <code>str</code> | The group's visibility. Can be `private`, `internal`, or `public`. Valid values are: `private`, `internal`, `public`. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.wikiAccessLevel">wiki_access_level</a></code> | <code>str</code> | The group's wiki access level. Only available on Premium and Ultimate plans. Valid values are `disabled`, `private`, `enabled`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.group.GroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.group.GroupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-gitlab.group.GroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-gitlab.group.GroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.group.GroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.group.GroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.group.GroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.group.GroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#name Group#name}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.group.GroupConfig.property.path"></a>

```python
path: str
```

- *Type:* str

The path of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#path Group#path}

---

##### `auto_devops_enabled`<sup>Optional</sup> <a name="auto_devops_enabled" id="@cdktf/provider-gitlab.group.GroupConfig.property.autoDevopsEnabled"></a>

```python
auto_devops_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Default to Auto DevOps pipeline for all projects within this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#auto_devops_enabled Group#auto_devops_enabled}

---

##### `avatar`<sup>Optional</sup> <a name="avatar" id="@cdktf/provider-gitlab.group.GroupConfig.property.avatar"></a>

```python
avatar: str
```

- *Type:* str

A local path to the avatar image to upload. **Note**: not available for imported resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#avatar Group#avatar}

---

##### `avatar_hash`<sup>Optional</sup> <a name="avatar_hash" id="@cdktf/provider-gitlab.group.GroupConfig.property.avatarHash"></a>

```python
avatar_hash: str
```

- *Type:* str

The hash of the avatar image.

Use `filesha256("path/to/avatar.png")` whenever possible. **Note**: this is used to trigger an update of the avatar. If it's not given, but an avatar is given, the avatar will be updated each time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#avatar_hash Group#avatar_hash}

---

##### `default_branch_protection`<sup>Optional</sup> <a name="default_branch_protection" id="@cdktf/provider-gitlab.group.GroupConfig.property.defaultBranchProtection"></a>

```python
default_branch_protection: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

See https://docs.gitlab.com/ee/api/groups.html#options-for-default_branch_protection. Valid values are: `0`, `1`, `2`, `3`, `4`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#default_branch_protection Group#default_branch_protection}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-gitlab.group.GroupConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The group's description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#description Group#description}

---

##### `emails_disabled`<sup>Optional</sup> <a name="emails_disabled" id="@cdktf/provider-gitlab.group.GroupConfig.property.emailsDisabled"></a>

```python
emails_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable email notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#emails_disabled Group#emails_disabled}

---

##### `emails_enabled`<sup>Optional</sup> <a name="emails_enabled" id="@cdktf/provider-gitlab.group.GroupConfig.property.emailsEnabled"></a>

```python
emails_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable email notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#emails_enabled Group#emails_enabled}

---

##### `extra_shared_runners_minutes_limit`<sup>Optional</sup> <a name="extra_shared_runners_minutes_limit" id="@cdktf/provider-gitlab.group.GroupConfig.property.extraSharedRunnersMinutesLimit"></a>

```python
extra_shared_runners_minutes_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Can be set by administrators only. Additional CI/CD minutes for this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#extra_shared_runners_minutes_limit Group#extra_shared_runners_minutes_limit}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.group.GroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#id Group#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_restriction_ranges`<sup>Optional</sup> <a name="ip_restriction_ranges" id="@cdktf/provider-gitlab.group.GroupConfig.property.ipRestrictionRanges"></a>

```python
ip_restriction_ranges: typing.List[str]
```

- *Type:* typing.List[str]

A list of IP addresses or subnet masks to restrict group access.

Will be concatenated together into a comma separated string. Only allowed on top level groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#ip_restriction_ranges Group#ip_restriction_ranges}

---

##### `lfs_enabled`<sup>Optional</sup> <a name="lfs_enabled" id="@cdktf/provider-gitlab.group.GroupConfig.property.lfsEnabled"></a>

```python
lfs_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable/disable Large File Storage (LFS) for the projects in this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#lfs_enabled Group#lfs_enabled}

---

##### `membership_lock`<sup>Optional</sup> <a name="membership_lock" id="@cdktf/provider-gitlab.group.GroupConfig.property.membershipLock"></a>

```python
membership_lock: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Users cannot be added to projects in this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#membership_lock Group#membership_lock}

---

##### `mentions_disabled`<sup>Optional</sup> <a name="mentions_disabled" id="@cdktf/provider-gitlab.group.GroupConfig.property.mentionsDisabled"></a>

```python
mentions_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable the capability of a group from getting mentioned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#mentions_disabled Group#mentions_disabled}

---

##### `parent_id`<sup>Optional</sup> <a name="parent_id" id="@cdktf/provider-gitlab.group.GroupConfig.property.parentId"></a>

```python
parent_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Id of the parent group (creates a nested group).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#parent_id Group#parent_id}

---

##### `prevent_forking_outside_group`<sup>Optional</sup> <a name="prevent_forking_outside_group" id="@cdktf/provider-gitlab.group.GroupConfig.property.preventForkingOutsideGroup"></a>

```python
prevent_forking_outside_group: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defaults to false. When enabled, users can not fork projects from this group to external namespaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#prevent_forking_outside_group Group#prevent_forking_outside_group}

---

##### `project_creation_level`<sup>Optional</sup> <a name="project_creation_level" id="@cdktf/provider-gitlab.group.GroupConfig.property.projectCreationLevel"></a>

```python
project_creation_level: str
```

- *Type:* str

Determine if developers can create projects in the group. Valid values are: `noone`, `maintainer`, `developer`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#project_creation_level Group#project_creation_level}

---

##### `push_rules`<sup>Optional</sup> <a name="push_rules" id="@cdktf/provider-gitlab.group.GroupConfig.property.pushRules"></a>

```python
push_rules: GroupPushRules
```

- *Type:* <a href="#@cdktf/provider-gitlab.group.GroupPushRules">GroupPushRules</a>

push_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#push_rules Group#push_rules}

---

##### `request_access_enabled`<sup>Optional</sup> <a name="request_access_enabled" id="@cdktf/provider-gitlab.group.GroupConfig.property.requestAccessEnabled"></a>

```python
request_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow users to request member access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#request_access_enabled Group#request_access_enabled}

---

##### `require_two_factor_authentication`<sup>Optional</sup> <a name="require_two_factor_authentication" id="@cdktf/provider-gitlab.group.GroupConfig.property.requireTwoFactorAuthentication"></a>

```python
require_two_factor_authentication: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Require all users in this group to setup Two-factor authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#require_two_factor_authentication Group#require_two_factor_authentication}

---

##### `shared_runners_minutes_limit`<sup>Optional</sup> <a name="shared_runners_minutes_limit" id="@cdktf/provider-gitlab.group.GroupConfig.property.sharedRunnersMinutesLimit"></a>

```python
shared_runners_minutes_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Can be set by administrators only.

Maximum number of monthly CI/CD minutes for this group. Can be nil (default; inherit system default), 0 (unlimited), or > 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#shared_runners_minutes_limit Group#shared_runners_minutes_limit}

---

##### `shared_runners_setting`<sup>Optional</sup> <a name="shared_runners_setting" id="@cdktf/provider-gitlab.group.GroupConfig.property.sharedRunnersSetting"></a>

```python
shared_runners_setting: str
```

- *Type:* str

Enable or disable shared runners for a group’s subgroups and projects. Valid values are: `enabled`, `disabled_and_overridable`, `disabled_and_unoverridable`, `disabled_with_override`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#shared_runners_setting Group#shared_runners_setting}

---

##### `share_with_group_lock`<sup>Optional</sup> <a name="share_with_group_lock" id="@cdktf/provider-gitlab.group.GroupConfig.property.shareWithGroupLock"></a>

```python
share_with_group_lock: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Prevent sharing a project with another group within this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#share_with_group_lock Group#share_with_group_lock}

---

##### `subgroup_creation_level`<sup>Optional</sup> <a name="subgroup_creation_level" id="@cdktf/provider-gitlab.group.GroupConfig.property.subgroupCreationLevel"></a>

```python
subgroup_creation_level: str
```

- *Type:* str

Allowed to create subgroups. Valid values are: `owner`, `maintainer`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#subgroup_creation_level Group#subgroup_creation_level}

---

##### `two_factor_grace_period`<sup>Optional</sup> <a name="two_factor_grace_period" id="@cdktf/provider-gitlab.group.GroupConfig.property.twoFactorGracePeriod"></a>

```python
two_factor_grace_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Defaults to 48. Time before Two-factor authentication is enforced (in hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#two_factor_grace_period Group#two_factor_grace_period}

---

##### `visibility_level`<sup>Optional</sup> <a name="visibility_level" id="@cdktf/provider-gitlab.group.GroupConfig.property.visibilityLevel"></a>

```python
visibility_level: str
```

- *Type:* str

The group's visibility. Can be `private`, `internal`, or `public`. Valid values are: `private`, `internal`, `public`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#visibility_level Group#visibility_level}

---

##### `wiki_access_level`<sup>Optional</sup> <a name="wiki_access_level" id="@cdktf/provider-gitlab.group.GroupConfig.property.wikiAccessLevel"></a>

```python
wiki_access_level: str
```

- *Type:* str

The group's wiki access level. Only available on Premium and Ultimate plans. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#wiki_access_level Group#wiki_access_level}

---

### GroupPushRules <a name="GroupPushRules" id="@cdktf/provider-gitlab.group.GroupPushRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.group.GroupPushRules.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import group

group.GroupPushRules(
  author_email_regex: str = None,
  branch_name_regex: str = None,
  commit_committer_check: typing.Union[bool, IResolvable] = None,
  commit_message_negative_regex: str = None,
  commit_message_regex: str = None,
  deny_delete_tag: typing.Union[bool, IResolvable] = None,
  file_name_regex: str = None,
  max_file_size: typing.Union[int, float] = None,
  member_check: typing.Union[bool, IResolvable] = None,
  prevent_secrets: typing.Union[bool, IResolvable] = None,
  reject_unsigned_commits: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules.property.authorEmailRegex">author_email_regex</a></code> | <code>str</code> | All commit author emails must match this regex, e.g. `@my-company.com$`. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules.property.branchNameRegex">branch_name_regex</a></code> | <code>str</code> | All branch names must match this regex, e.g. `(feature\|hotfix)\/*`. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules.property.commitCommitterCheck">commit_committer_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Only commits pushed using verified emails are allowed. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules.property.commitMessageNegativeRegex">commit_message_negative_regex</a></code> | <code>str</code> | No commit message is allowed to match this regex, for example `ssh\:\/\/`. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules.property.commitMessageRegex">commit_message_regex</a></code> | <code>str</code> | All commit messages must match this regex, e.g. `Fixed \d+\..*`. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules.property.denyDeleteTag">deny_delete_tag</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Deny deleting a tag. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules.property.fileNameRegex">file_name_regex</a></code> | <code>str</code> | Filenames matching the regular expression provided in this attribute are not allowed, for example, `(jar\|exe)$`. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules.property.maxFileSize">max_file_size</a></code> | <code>typing.Union[int, float]</code> | Maximum file size (MB) allowed. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules.property.memberCheck">member_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allows only GitLab users to author commits. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules.property.preventSecrets">prevent_secrets</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | GitLab will reject any files that are likely to contain secrets. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules.property.rejectUnsignedCommits">reject_unsigned_commits</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Only commits signed through GPG are allowed.  **Note** This attribute is only supported in GitLab versions >= 16.4. |

---

##### `author_email_regex`<sup>Optional</sup> <a name="author_email_regex" id="@cdktf/provider-gitlab.group.GroupPushRules.property.authorEmailRegex"></a>

```python
author_email_regex: str
```

- *Type:* str

All commit author emails must match this regex, e.g. `@my-company.com$`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#author_email_regex Group#author_email_regex}

---

##### `branch_name_regex`<sup>Optional</sup> <a name="branch_name_regex" id="@cdktf/provider-gitlab.group.GroupPushRules.property.branchNameRegex"></a>

```python
branch_name_regex: str
```

- *Type:* str

All branch names must match this regex, e.g. `(feature|hotfix)\/*`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#branch_name_regex Group#branch_name_regex}

---

##### `commit_committer_check`<sup>Optional</sup> <a name="commit_committer_check" id="@cdktf/provider-gitlab.group.GroupPushRules.property.commitCommitterCheck"></a>

```python
commit_committer_check: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Only commits pushed using verified emails are allowed.

**Note** This attribute is only supported in GitLab versions >= 16.4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#commit_committer_check Group#commit_committer_check}

---

##### `commit_message_negative_regex`<sup>Optional</sup> <a name="commit_message_negative_regex" id="@cdktf/provider-gitlab.group.GroupPushRules.property.commitMessageNegativeRegex"></a>

```python
commit_message_negative_regex: str
```

- *Type:* str

No commit message is allowed to match this regex, for example `ssh\:\/\/`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#commit_message_negative_regex Group#commit_message_negative_regex}

---

##### `commit_message_regex`<sup>Optional</sup> <a name="commit_message_regex" id="@cdktf/provider-gitlab.group.GroupPushRules.property.commitMessageRegex"></a>

```python
commit_message_regex: str
```

- *Type:* str

All commit messages must match this regex, e.g. `Fixed \d+\..*`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#commit_message_regex Group#commit_message_regex}

---

##### `deny_delete_tag`<sup>Optional</sup> <a name="deny_delete_tag" id="@cdktf/provider-gitlab.group.GroupPushRules.property.denyDeleteTag"></a>

```python
deny_delete_tag: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Deny deleting a tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#deny_delete_tag Group#deny_delete_tag}

---

##### `file_name_regex`<sup>Optional</sup> <a name="file_name_regex" id="@cdktf/provider-gitlab.group.GroupPushRules.property.fileNameRegex"></a>

```python
file_name_regex: str
```

- *Type:* str

Filenames matching the regular expression provided in this attribute are not allowed, for example, `(jar|exe)$`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#file_name_regex Group#file_name_regex}

---

##### `max_file_size`<sup>Optional</sup> <a name="max_file_size" id="@cdktf/provider-gitlab.group.GroupPushRules.property.maxFileSize"></a>

```python
max_file_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum file size (MB) allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#max_file_size Group#max_file_size}

---

##### `member_check`<sup>Optional</sup> <a name="member_check" id="@cdktf/provider-gitlab.group.GroupPushRules.property.memberCheck"></a>

```python
member_check: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allows only GitLab users to author commits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#member_check Group#member_check}

---

##### `prevent_secrets`<sup>Optional</sup> <a name="prevent_secrets" id="@cdktf/provider-gitlab.group.GroupPushRules.property.preventSecrets"></a>

```python
prevent_secrets: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

GitLab will reject any files that are likely to contain secrets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#prevent_secrets Group#prevent_secrets}

---

##### `reject_unsigned_commits`<sup>Optional</sup> <a name="reject_unsigned_commits" id="@cdktf/provider-gitlab.group.GroupPushRules.property.rejectUnsignedCommits"></a>

```python
reject_unsigned_commits: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Only commits signed through GPG are allowed.  **Note** This attribute is only supported in GitLab versions >= 16.4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/group#reject_unsigned_commits Group#reject_unsigned_commits}

---

## Classes <a name="Classes" id="Classes"></a>

### GroupPushRulesOutputReference <a name="GroupPushRulesOutputReference" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_gitlab import group

group.GroupPushRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetAuthorEmailRegex">reset_author_email_regex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetBranchNameRegex">reset_branch_name_regex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetCommitCommitterCheck">reset_commit_committer_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetCommitMessageNegativeRegex">reset_commit_message_negative_regex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetCommitMessageRegex">reset_commit_message_regex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetDenyDeleteTag">reset_deny_delete_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetFileNameRegex">reset_file_name_regex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetMaxFileSize">reset_max_file_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetMemberCheck">reset_member_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetPreventSecrets">reset_prevent_secrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetRejectUnsignedCommits">reset_reject_unsigned_commits</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_author_email_regex` <a name="reset_author_email_regex" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetAuthorEmailRegex"></a>

```python
def reset_author_email_regex() -> None
```

##### `reset_branch_name_regex` <a name="reset_branch_name_regex" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetBranchNameRegex"></a>

```python
def reset_branch_name_regex() -> None
```

##### `reset_commit_committer_check` <a name="reset_commit_committer_check" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetCommitCommitterCheck"></a>

```python
def reset_commit_committer_check() -> None
```

##### `reset_commit_message_negative_regex` <a name="reset_commit_message_negative_regex" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetCommitMessageNegativeRegex"></a>

```python
def reset_commit_message_negative_regex() -> None
```

##### `reset_commit_message_regex` <a name="reset_commit_message_regex" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetCommitMessageRegex"></a>

```python
def reset_commit_message_regex() -> None
```

##### `reset_deny_delete_tag` <a name="reset_deny_delete_tag" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetDenyDeleteTag"></a>

```python
def reset_deny_delete_tag() -> None
```

##### `reset_file_name_regex` <a name="reset_file_name_regex" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetFileNameRegex"></a>

```python
def reset_file_name_regex() -> None
```

##### `reset_max_file_size` <a name="reset_max_file_size" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetMaxFileSize"></a>

```python
def reset_max_file_size() -> None
```

##### `reset_member_check` <a name="reset_member_check" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetMemberCheck"></a>

```python
def reset_member_check() -> None
```

##### `reset_prevent_secrets` <a name="reset_prevent_secrets" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetPreventSecrets"></a>

```python
def reset_prevent_secrets() -> None
```

##### `reset_reject_unsigned_commits` <a name="reset_reject_unsigned_commits" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetRejectUnsignedCommits"></a>

```python
def reset_reject_unsigned_commits() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.authorEmailRegexInput">author_email_regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.branchNameRegexInput">branch_name_regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitCommitterCheckInput">commit_committer_check_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitMessageNegativeRegexInput">commit_message_negative_regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitMessageRegexInput">commit_message_regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.denyDeleteTagInput">deny_delete_tag_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.fileNameRegexInput">file_name_regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.maxFileSizeInput">max_file_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.memberCheckInput">member_check_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.preventSecretsInput">prevent_secrets_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.rejectUnsignedCommitsInput">reject_unsigned_commits_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.authorEmailRegex">author_email_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.branchNameRegex">branch_name_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitCommitterCheck">commit_committer_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitMessageNegativeRegex">commit_message_negative_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitMessageRegex">commit_message_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.denyDeleteTag">deny_delete_tag</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.fileNameRegex">file_name_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.maxFileSize">max_file_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.memberCheck">member_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.preventSecrets">prevent_secrets</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.rejectUnsignedCommits">reject_unsigned_commits</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules">GroupPushRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `author_email_regex_input`<sup>Optional</sup> <a name="author_email_regex_input" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.authorEmailRegexInput"></a>

```python
author_email_regex_input: str
```

- *Type:* str

---

##### `branch_name_regex_input`<sup>Optional</sup> <a name="branch_name_regex_input" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.branchNameRegexInput"></a>

```python
branch_name_regex_input: str
```

- *Type:* str

---

##### `commit_committer_check_input`<sup>Optional</sup> <a name="commit_committer_check_input" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitCommitterCheckInput"></a>

```python
commit_committer_check_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `commit_message_negative_regex_input`<sup>Optional</sup> <a name="commit_message_negative_regex_input" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitMessageNegativeRegexInput"></a>

```python
commit_message_negative_regex_input: str
```

- *Type:* str

---

##### `commit_message_regex_input`<sup>Optional</sup> <a name="commit_message_regex_input" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitMessageRegexInput"></a>

```python
commit_message_regex_input: str
```

- *Type:* str

---

##### `deny_delete_tag_input`<sup>Optional</sup> <a name="deny_delete_tag_input" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.denyDeleteTagInput"></a>

```python
deny_delete_tag_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `file_name_regex_input`<sup>Optional</sup> <a name="file_name_regex_input" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.fileNameRegexInput"></a>

```python
file_name_regex_input: str
```

- *Type:* str

---

##### `max_file_size_input`<sup>Optional</sup> <a name="max_file_size_input" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.maxFileSizeInput"></a>

```python
max_file_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `member_check_input`<sup>Optional</sup> <a name="member_check_input" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.memberCheckInput"></a>

```python
member_check_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `prevent_secrets_input`<sup>Optional</sup> <a name="prevent_secrets_input" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.preventSecretsInput"></a>

```python
prevent_secrets_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `reject_unsigned_commits_input`<sup>Optional</sup> <a name="reject_unsigned_commits_input" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.rejectUnsignedCommitsInput"></a>

```python
reject_unsigned_commits_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `author_email_regex`<sup>Required</sup> <a name="author_email_regex" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.authorEmailRegex"></a>

```python
author_email_regex: str
```

- *Type:* str

---

##### `branch_name_regex`<sup>Required</sup> <a name="branch_name_regex" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.branchNameRegex"></a>

```python
branch_name_regex: str
```

- *Type:* str

---

##### `commit_committer_check`<sup>Required</sup> <a name="commit_committer_check" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitCommitterCheck"></a>

```python
commit_committer_check: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `commit_message_negative_regex`<sup>Required</sup> <a name="commit_message_negative_regex" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitMessageNegativeRegex"></a>

```python
commit_message_negative_regex: str
```

- *Type:* str

---

##### `commit_message_regex`<sup>Required</sup> <a name="commit_message_regex" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitMessageRegex"></a>

```python
commit_message_regex: str
```

- *Type:* str

---

##### `deny_delete_tag`<sup>Required</sup> <a name="deny_delete_tag" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.denyDeleteTag"></a>

```python
deny_delete_tag: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `file_name_regex`<sup>Required</sup> <a name="file_name_regex" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.fileNameRegex"></a>

```python
file_name_regex: str
```

- *Type:* str

---

##### `max_file_size`<sup>Required</sup> <a name="max_file_size" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.maxFileSize"></a>

```python
max_file_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `member_check`<sup>Required</sup> <a name="member_check" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.memberCheck"></a>

```python
member_check: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `prevent_secrets`<sup>Required</sup> <a name="prevent_secrets" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.preventSecrets"></a>

```python
prevent_secrets: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `reject_unsigned_commits`<sup>Required</sup> <a name="reject_unsigned_commits" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.rejectUnsignedCommits"></a>

```python
reject_unsigned_commits: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.internalValue"></a>

```python
internal_value: GroupPushRules
```

- *Type:* <a href="#@cdktf/provider-gitlab.group.GroupPushRules">GroupPushRules</a>

---



