# `group` Submodule <a name="`group` Submodule" id="@cdktf/provider-gitlab.group"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Group <a name="Group" id="@cdktf/provider-gitlab.group.Group"></a>

Represents a {@link https://www.terraform.io/docs/providers/gitlab/r/group gitlab_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.group.Group.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v7/group"

group.NewGroup(scope Construct, id *string, config GroupConfig) Group
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.group.GroupConfig">GroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.group.GroupConfig">GroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.Group.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetAutoDevopsEnabled">ResetAutoDevopsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetAvatar">ResetAvatar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetAvatarHash">ResetAvatarHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetDefaultBranchProtection">ResetDefaultBranchProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetEmailsDisabled">ResetEmailsDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetExtraSharedRunnersMinutesLimit">ResetExtraSharedRunnersMinutesLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetIpRestrictionRanges">ResetIpRestrictionRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetLfsEnabled">ResetLfsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetMembershipLock">ResetMembershipLock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetMentionsDisabled">ResetMentionsDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetParentId">ResetParentId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetPreventForkingOutsideGroup">ResetPreventForkingOutsideGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetProjectCreationLevel">ResetProjectCreationLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetRequestAccessEnabled">ResetRequestAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetRequireTwoFactorAuthentication">ResetRequireTwoFactorAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetSharedRunnersMinutesLimit">ResetSharedRunnersMinutesLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetShareWithGroupLock">ResetShareWithGroupLock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetSubgroupCreationLevel">ResetSubgroupCreationLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetTwoFactorGracePeriod">ResetTwoFactorGracePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetVisibilityLevel">ResetVisibilityLevel</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.group.Group.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.group.Group.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.group.Group.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.group.Group.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.group.Group.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.group.Group.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.group.Group.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.group.Group.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.group.Group.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.group.Group.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.Group.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.group.Group.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.Group.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.group.Group.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.Group.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.group.Group.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.Group.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.group.Group.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.Group.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.group.Group.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.Group.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.group.Group.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.Group.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.group.Group.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.Group.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.group.Group.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.Group.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.group.Group.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.Group.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAutoDevopsEnabled` <a name="ResetAutoDevopsEnabled" id="@cdktf/provider-gitlab.group.Group.resetAutoDevopsEnabled"></a>

```go
func ResetAutoDevopsEnabled()
```

##### `ResetAvatar` <a name="ResetAvatar" id="@cdktf/provider-gitlab.group.Group.resetAvatar"></a>

```go
func ResetAvatar()
```

##### `ResetAvatarHash` <a name="ResetAvatarHash" id="@cdktf/provider-gitlab.group.Group.resetAvatarHash"></a>

```go
func ResetAvatarHash()
```

##### `ResetDefaultBranchProtection` <a name="ResetDefaultBranchProtection" id="@cdktf/provider-gitlab.group.Group.resetDefaultBranchProtection"></a>

```go
func ResetDefaultBranchProtection()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-gitlab.group.Group.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEmailsDisabled` <a name="ResetEmailsDisabled" id="@cdktf/provider-gitlab.group.Group.resetEmailsDisabled"></a>

```go
func ResetEmailsDisabled()
```

##### `ResetExtraSharedRunnersMinutesLimit` <a name="ResetExtraSharedRunnersMinutesLimit" id="@cdktf/provider-gitlab.group.Group.resetExtraSharedRunnersMinutesLimit"></a>

```go
func ResetExtraSharedRunnersMinutesLimit()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-gitlab.group.Group.resetId"></a>

```go
func ResetId()
```

##### `ResetIpRestrictionRanges` <a name="ResetIpRestrictionRanges" id="@cdktf/provider-gitlab.group.Group.resetIpRestrictionRanges"></a>

```go
func ResetIpRestrictionRanges()
```

##### `ResetLfsEnabled` <a name="ResetLfsEnabled" id="@cdktf/provider-gitlab.group.Group.resetLfsEnabled"></a>

```go
func ResetLfsEnabled()
```

##### `ResetMembershipLock` <a name="ResetMembershipLock" id="@cdktf/provider-gitlab.group.Group.resetMembershipLock"></a>

```go
func ResetMembershipLock()
```

##### `ResetMentionsDisabled` <a name="ResetMentionsDisabled" id="@cdktf/provider-gitlab.group.Group.resetMentionsDisabled"></a>

```go
func ResetMentionsDisabled()
```

##### `ResetParentId` <a name="ResetParentId" id="@cdktf/provider-gitlab.group.Group.resetParentId"></a>

```go
func ResetParentId()
```

##### `ResetPreventForkingOutsideGroup` <a name="ResetPreventForkingOutsideGroup" id="@cdktf/provider-gitlab.group.Group.resetPreventForkingOutsideGroup"></a>

```go
func ResetPreventForkingOutsideGroup()
```

##### `ResetProjectCreationLevel` <a name="ResetProjectCreationLevel" id="@cdktf/provider-gitlab.group.Group.resetProjectCreationLevel"></a>

```go
func ResetProjectCreationLevel()
```

##### `ResetRequestAccessEnabled` <a name="ResetRequestAccessEnabled" id="@cdktf/provider-gitlab.group.Group.resetRequestAccessEnabled"></a>

```go
func ResetRequestAccessEnabled()
```

##### `ResetRequireTwoFactorAuthentication` <a name="ResetRequireTwoFactorAuthentication" id="@cdktf/provider-gitlab.group.Group.resetRequireTwoFactorAuthentication"></a>

```go
func ResetRequireTwoFactorAuthentication()
```

##### `ResetSharedRunnersMinutesLimit` <a name="ResetSharedRunnersMinutesLimit" id="@cdktf/provider-gitlab.group.Group.resetSharedRunnersMinutesLimit"></a>

```go
func ResetSharedRunnersMinutesLimit()
```

##### `ResetShareWithGroupLock` <a name="ResetShareWithGroupLock" id="@cdktf/provider-gitlab.group.Group.resetShareWithGroupLock"></a>

```go
func ResetShareWithGroupLock()
```

##### `ResetSubgroupCreationLevel` <a name="ResetSubgroupCreationLevel" id="@cdktf/provider-gitlab.group.Group.resetSubgroupCreationLevel"></a>

```go
func ResetSubgroupCreationLevel()
```

##### `ResetTwoFactorGracePeriod` <a name="ResetTwoFactorGracePeriod" id="@cdktf/provider-gitlab.group.Group.resetTwoFactorGracePeriod"></a>

```go
func ResetTwoFactorGracePeriod()
```

##### `ResetVisibilityLevel` <a name="ResetVisibilityLevel" id="@cdktf/provider-gitlab.group.Group.resetVisibilityLevel"></a>

```go
func ResetVisibilityLevel()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.Group.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.group.Group.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v7/group"

group.Group_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.group.Group.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v7/group"

group.Group_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.group.Group.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.group.Group.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v7/group"

group.Group_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.group.Group.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.avatarUrl">AvatarUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.fullName">FullName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.fullPath">FullPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.runnersToken">RunnersToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.webUrl">WebUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.autoDevopsEnabledInput">AutoDevopsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.avatarHashInput">AvatarHashInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.avatarInput">AvatarInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.defaultBranchProtectionInput">DefaultBranchProtectionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.emailsDisabledInput">EmailsDisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.extraSharedRunnersMinutesLimitInput">ExtraSharedRunnersMinutesLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.ipRestrictionRangesInput">IpRestrictionRangesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.lfsEnabledInput">LfsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.membershipLockInput">MembershipLockInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.mentionsDisabledInput">MentionsDisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.parentIdInput">ParentIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.preventForkingOutsideGroupInput">PreventForkingOutsideGroupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.projectCreationLevelInput">ProjectCreationLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.requestAccessEnabledInput">RequestAccessEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.requireTwoFactorAuthenticationInput">RequireTwoFactorAuthenticationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.sharedRunnersMinutesLimitInput">SharedRunnersMinutesLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.shareWithGroupLockInput">ShareWithGroupLockInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.subgroupCreationLevelInput">SubgroupCreationLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.twoFactorGracePeriodInput">TwoFactorGracePeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.visibilityLevelInput">VisibilityLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.autoDevopsEnabled">AutoDevopsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.avatar">Avatar</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.avatarHash">AvatarHash</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.defaultBranchProtection">DefaultBranchProtection</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.emailsDisabled">EmailsDisabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.extraSharedRunnersMinutesLimit">ExtraSharedRunnersMinutesLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.ipRestrictionRanges">IpRestrictionRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.lfsEnabled">LfsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.membershipLock">MembershipLock</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.mentionsDisabled">MentionsDisabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.parentId">ParentId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.preventForkingOutsideGroup">PreventForkingOutsideGroup</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.projectCreationLevel">ProjectCreationLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.requestAccessEnabled">RequestAccessEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.requireTwoFactorAuthentication">RequireTwoFactorAuthentication</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.sharedRunnersMinutesLimit">SharedRunnersMinutesLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.shareWithGroupLock">ShareWithGroupLock</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.subgroupCreationLevel">SubgroupCreationLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.twoFactorGracePeriod">TwoFactorGracePeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.visibilityLevel">VisibilityLevel</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.group.Group.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.group.Group.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.group.Group.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.group.Group.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.group.Group.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.group.Group.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.group.Group.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.group.Group.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.group.Group.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.group.Group.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.group.Group.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.group.Group.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.group.Group.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.group.Group.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AvatarUrl`<sup>Required</sup> <a name="AvatarUrl" id="@cdktf/provider-gitlab.group.Group.property.avatarUrl"></a>

```go
func AvatarUrl() *string
```

- *Type:* *string

---

##### `FullName`<sup>Required</sup> <a name="FullName" id="@cdktf/provider-gitlab.group.Group.property.fullName"></a>

```go
func FullName() *string
```

- *Type:* *string

---

##### `FullPath`<sup>Required</sup> <a name="FullPath" id="@cdktf/provider-gitlab.group.Group.property.fullPath"></a>

```go
func FullPath() *string
```

- *Type:* *string

---

##### `RunnersToken`<sup>Required</sup> <a name="RunnersToken" id="@cdktf/provider-gitlab.group.Group.property.runnersToken"></a>

```go
func RunnersToken() *string
```

- *Type:* *string

---

##### `WebUrl`<sup>Required</sup> <a name="WebUrl" id="@cdktf/provider-gitlab.group.Group.property.webUrl"></a>

```go
func WebUrl() *string
```

- *Type:* *string

---

##### `AutoDevopsEnabledInput`<sup>Optional</sup> <a name="AutoDevopsEnabledInput" id="@cdktf/provider-gitlab.group.Group.property.autoDevopsEnabledInput"></a>

```go
func AutoDevopsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AvatarHashInput`<sup>Optional</sup> <a name="AvatarHashInput" id="@cdktf/provider-gitlab.group.Group.property.avatarHashInput"></a>

```go
func AvatarHashInput() *string
```

- *Type:* *string

---

##### `AvatarInput`<sup>Optional</sup> <a name="AvatarInput" id="@cdktf/provider-gitlab.group.Group.property.avatarInput"></a>

```go
func AvatarInput() *string
```

- *Type:* *string

---

##### `DefaultBranchProtectionInput`<sup>Optional</sup> <a name="DefaultBranchProtectionInput" id="@cdktf/provider-gitlab.group.Group.property.defaultBranchProtectionInput"></a>

```go
func DefaultBranchProtectionInput() *f64
```

- *Type:* *f64

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-gitlab.group.Group.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EmailsDisabledInput`<sup>Optional</sup> <a name="EmailsDisabledInput" id="@cdktf/provider-gitlab.group.Group.property.emailsDisabledInput"></a>

```go
func EmailsDisabledInput() interface{}
```

- *Type:* interface{}

---

##### `ExtraSharedRunnersMinutesLimitInput`<sup>Optional</sup> <a name="ExtraSharedRunnersMinutesLimitInput" id="@cdktf/provider-gitlab.group.Group.property.extraSharedRunnersMinutesLimitInput"></a>

```go
func ExtraSharedRunnersMinutesLimitInput() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-gitlab.group.Group.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IpRestrictionRangesInput`<sup>Optional</sup> <a name="IpRestrictionRangesInput" id="@cdktf/provider-gitlab.group.Group.property.ipRestrictionRangesInput"></a>

```go
func IpRestrictionRangesInput() *[]*string
```

- *Type:* *[]*string

---

##### `LfsEnabledInput`<sup>Optional</sup> <a name="LfsEnabledInput" id="@cdktf/provider-gitlab.group.Group.property.lfsEnabledInput"></a>

```go
func LfsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `MembershipLockInput`<sup>Optional</sup> <a name="MembershipLockInput" id="@cdktf/provider-gitlab.group.Group.property.membershipLockInput"></a>

```go
func MembershipLockInput() interface{}
```

- *Type:* interface{}

---

##### `MentionsDisabledInput`<sup>Optional</sup> <a name="MentionsDisabledInput" id="@cdktf/provider-gitlab.group.Group.property.mentionsDisabledInput"></a>

```go
func MentionsDisabledInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-gitlab.group.Group.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParentIdInput`<sup>Optional</sup> <a name="ParentIdInput" id="@cdktf/provider-gitlab.group.Group.property.parentIdInput"></a>

```go
func ParentIdInput() *f64
```

- *Type:* *f64

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-gitlab.group.Group.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `PreventForkingOutsideGroupInput`<sup>Optional</sup> <a name="PreventForkingOutsideGroupInput" id="@cdktf/provider-gitlab.group.Group.property.preventForkingOutsideGroupInput"></a>

```go
func PreventForkingOutsideGroupInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectCreationLevelInput`<sup>Optional</sup> <a name="ProjectCreationLevelInput" id="@cdktf/provider-gitlab.group.Group.property.projectCreationLevelInput"></a>

```go
func ProjectCreationLevelInput() *string
```

- *Type:* *string

---

##### `RequestAccessEnabledInput`<sup>Optional</sup> <a name="RequestAccessEnabledInput" id="@cdktf/provider-gitlab.group.Group.property.requestAccessEnabledInput"></a>

```go
func RequestAccessEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `RequireTwoFactorAuthenticationInput`<sup>Optional</sup> <a name="RequireTwoFactorAuthenticationInput" id="@cdktf/provider-gitlab.group.Group.property.requireTwoFactorAuthenticationInput"></a>

```go
func RequireTwoFactorAuthenticationInput() interface{}
```

- *Type:* interface{}

---

##### `SharedRunnersMinutesLimitInput`<sup>Optional</sup> <a name="SharedRunnersMinutesLimitInput" id="@cdktf/provider-gitlab.group.Group.property.sharedRunnersMinutesLimitInput"></a>

```go
func SharedRunnersMinutesLimitInput() *f64
```

- *Type:* *f64

---

##### `ShareWithGroupLockInput`<sup>Optional</sup> <a name="ShareWithGroupLockInput" id="@cdktf/provider-gitlab.group.Group.property.shareWithGroupLockInput"></a>

```go
func ShareWithGroupLockInput() interface{}
```

- *Type:* interface{}

---

##### `SubgroupCreationLevelInput`<sup>Optional</sup> <a name="SubgroupCreationLevelInput" id="@cdktf/provider-gitlab.group.Group.property.subgroupCreationLevelInput"></a>

```go
func SubgroupCreationLevelInput() *string
```

- *Type:* *string

---

##### `TwoFactorGracePeriodInput`<sup>Optional</sup> <a name="TwoFactorGracePeriodInput" id="@cdktf/provider-gitlab.group.Group.property.twoFactorGracePeriodInput"></a>

```go
func TwoFactorGracePeriodInput() *f64
```

- *Type:* *f64

---

##### `VisibilityLevelInput`<sup>Optional</sup> <a name="VisibilityLevelInput" id="@cdktf/provider-gitlab.group.Group.property.visibilityLevelInput"></a>

```go
func VisibilityLevelInput() *string
```

- *Type:* *string

---

##### `AutoDevopsEnabled`<sup>Required</sup> <a name="AutoDevopsEnabled" id="@cdktf/provider-gitlab.group.Group.property.autoDevopsEnabled"></a>

```go
func AutoDevopsEnabled() interface{}
```

- *Type:* interface{}

---

##### `Avatar`<sup>Required</sup> <a name="Avatar" id="@cdktf/provider-gitlab.group.Group.property.avatar"></a>

```go
func Avatar() *string
```

- *Type:* *string

---

##### `AvatarHash`<sup>Required</sup> <a name="AvatarHash" id="@cdktf/provider-gitlab.group.Group.property.avatarHash"></a>

```go
func AvatarHash() *string
```

- *Type:* *string

---

##### `DefaultBranchProtection`<sup>Required</sup> <a name="DefaultBranchProtection" id="@cdktf/provider-gitlab.group.Group.property.defaultBranchProtection"></a>

```go
func DefaultBranchProtection() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-gitlab.group.Group.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EmailsDisabled`<sup>Required</sup> <a name="EmailsDisabled" id="@cdktf/provider-gitlab.group.Group.property.emailsDisabled"></a>

```go
func EmailsDisabled() interface{}
```

- *Type:* interface{}

---

##### `ExtraSharedRunnersMinutesLimit`<sup>Required</sup> <a name="ExtraSharedRunnersMinutesLimit" id="@cdktf/provider-gitlab.group.Group.property.extraSharedRunnersMinutesLimit"></a>

```go
func ExtraSharedRunnersMinutesLimit() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.group.Group.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpRestrictionRanges`<sup>Required</sup> <a name="IpRestrictionRanges" id="@cdktf/provider-gitlab.group.Group.property.ipRestrictionRanges"></a>

```go
func IpRestrictionRanges() *[]*string
```

- *Type:* *[]*string

---

##### `LfsEnabled`<sup>Required</sup> <a name="LfsEnabled" id="@cdktf/provider-gitlab.group.Group.property.lfsEnabled"></a>

```go
func LfsEnabled() interface{}
```

- *Type:* interface{}

---

##### `MembershipLock`<sup>Required</sup> <a name="MembershipLock" id="@cdktf/provider-gitlab.group.Group.property.membershipLock"></a>

```go
func MembershipLock() interface{}
```

- *Type:* interface{}

---

##### `MentionsDisabled`<sup>Required</sup> <a name="MentionsDisabled" id="@cdktf/provider-gitlab.group.Group.property.mentionsDisabled"></a>

```go
func MentionsDisabled() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.group.Group.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ParentId`<sup>Required</sup> <a name="ParentId" id="@cdktf/provider-gitlab.group.Group.property.parentId"></a>

```go
func ParentId() *f64
```

- *Type:* *f64

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.group.Group.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `PreventForkingOutsideGroup`<sup>Required</sup> <a name="PreventForkingOutsideGroup" id="@cdktf/provider-gitlab.group.Group.property.preventForkingOutsideGroup"></a>

```go
func PreventForkingOutsideGroup() interface{}
```

- *Type:* interface{}

---

##### `ProjectCreationLevel`<sup>Required</sup> <a name="ProjectCreationLevel" id="@cdktf/provider-gitlab.group.Group.property.projectCreationLevel"></a>

```go
func ProjectCreationLevel() *string
```

- *Type:* *string

---

##### `RequestAccessEnabled`<sup>Required</sup> <a name="RequestAccessEnabled" id="@cdktf/provider-gitlab.group.Group.property.requestAccessEnabled"></a>

```go
func RequestAccessEnabled() interface{}
```

- *Type:* interface{}

---

##### `RequireTwoFactorAuthentication`<sup>Required</sup> <a name="RequireTwoFactorAuthentication" id="@cdktf/provider-gitlab.group.Group.property.requireTwoFactorAuthentication"></a>

```go
func RequireTwoFactorAuthentication() interface{}
```

- *Type:* interface{}

---

##### `SharedRunnersMinutesLimit`<sup>Required</sup> <a name="SharedRunnersMinutesLimit" id="@cdktf/provider-gitlab.group.Group.property.sharedRunnersMinutesLimit"></a>

```go
func SharedRunnersMinutesLimit() *f64
```

- *Type:* *f64

---

##### `ShareWithGroupLock`<sup>Required</sup> <a name="ShareWithGroupLock" id="@cdktf/provider-gitlab.group.Group.property.shareWithGroupLock"></a>

```go
func ShareWithGroupLock() interface{}
```

- *Type:* interface{}

---

##### `SubgroupCreationLevel`<sup>Required</sup> <a name="SubgroupCreationLevel" id="@cdktf/provider-gitlab.group.Group.property.subgroupCreationLevel"></a>

```go
func SubgroupCreationLevel() *string
```

- *Type:* *string

---

##### `TwoFactorGracePeriod`<sup>Required</sup> <a name="TwoFactorGracePeriod" id="@cdktf/provider-gitlab.group.Group.property.twoFactorGracePeriod"></a>

```go
func TwoFactorGracePeriod() *f64
```

- *Type:* *f64

---

##### `VisibilityLevel`<sup>Required</sup> <a name="VisibilityLevel" id="@cdktf/provider-gitlab.group.Group.property.visibilityLevel"></a>

```go
func VisibilityLevel() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.group.Group.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GroupConfig <a name="GroupConfig" id="@cdktf/provider-gitlab.group.GroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.group.GroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v7/group"

&group.GroupConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Path: *string,
	AutoDevopsEnabled: interface{},
	Avatar: *string,
	AvatarHash: *string,
	DefaultBranchProtection: *f64,
	Description: *string,
	EmailsDisabled: interface{},
	ExtraSharedRunnersMinutesLimit: *f64,
	Id: *string,
	IpRestrictionRanges: *[]*string,
	LfsEnabled: interface{},
	MembershipLock: interface{},
	MentionsDisabled: interface{},
	ParentId: *f64,
	PreventForkingOutsideGroup: interface{},
	ProjectCreationLevel: *string,
	RequestAccessEnabled: interface{},
	RequireTwoFactorAuthentication: interface{},
	SharedRunnersMinutesLimit: *f64,
	ShareWithGroupLock: interface{},
	SubgroupCreationLevel: *string,
	TwoFactorGracePeriod: *f64,
	VisibilityLevel: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.name">Name</a></code> | <code>*string</code> | The name of this group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.path">Path</a></code> | <code>*string</code> | The path of the group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.autoDevopsEnabled">AutoDevopsEnabled</a></code> | <code>interface{}</code> | Defaults to false. Default to Auto DevOps pipeline for all projects within this group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.avatar">Avatar</a></code> | <code>*string</code> | A local path to the avatar image to upload. **Note**: not available for imported resources. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.avatarHash">AvatarHash</a></code> | <code>*string</code> | The hash of the avatar image. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.defaultBranchProtection">DefaultBranchProtection</a></code> | <code>*f64</code> | Defaults to 2. See https://docs.gitlab.com/ee/api/groups.html#options-for-default_branch_protection. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.description">Description</a></code> | <code>*string</code> | The description of the group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.emailsDisabled">EmailsDisabled</a></code> | <code>interface{}</code> | Defaults to false. Disable email notifications. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.extraSharedRunnersMinutesLimit">ExtraSharedRunnersMinutesLimit</a></code> | <code>*f64</code> | Can be set by administrators only. Additional CI/CD minutes for this group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group#id Group#id}. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.ipRestrictionRanges">IpRestrictionRanges</a></code> | <code>*[]*string</code> | A list of IP addresses or subnet masks to restrict group access. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.lfsEnabled">LfsEnabled</a></code> | <code>interface{}</code> | Defaults to true. Enable/disable Large File Storage (LFS) for the projects in this group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.membershipLock">MembershipLock</a></code> | <code>interface{}</code> | Users cannot be added to projects in this group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.mentionsDisabled">MentionsDisabled</a></code> | <code>interface{}</code> | Defaults to false. Disable the capability of a group from getting mentioned. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.parentId">ParentId</a></code> | <code>*f64</code> | Id of the parent group (creates a nested group). |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.preventForkingOutsideGroup">PreventForkingOutsideGroup</a></code> | <code>interface{}</code> | Defaults to false. When enabled, users can not fork projects from this group to external namespaces. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.projectCreationLevel">ProjectCreationLevel</a></code> | <code>*string</code> | Defaults to maintainer. Determine if developers can create projects in the group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.requestAccessEnabled">RequestAccessEnabled</a></code> | <code>interface{}</code> | Defaults to false. Allow users to request member access. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.requireTwoFactorAuthentication">RequireTwoFactorAuthentication</a></code> | <code>interface{}</code> | Defaults to false. Require all users in this group to setup Two-factor authentication. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.sharedRunnersMinutesLimit">SharedRunnersMinutesLimit</a></code> | <code>*f64</code> | Can be set by administrators only. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.shareWithGroupLock">ShareWithGroupLock</a></code> | <code>interface{}</code> | Defaults to false. Prevent sharing a project with another group within this group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.subgroupCreationLevel">SubgroupCreationLevel</a></code> | <code>*string</code> | Defaults to owner. Allowed to create subgroups. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.twoFactorGracePeriod">TwoFactorGracePeriod</a></code> | <code>*f64</code> | Defaults to 48. Time before Two-factor authentication is enforced (in hours). |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.visibilityLevel">VisibilityLevel</a></code> | <code>*string</code> | The group's visibility. Can be `private`, `internal`, or `public`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.group.GroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.group.GroupConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.group.GroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.group.GroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.group.GroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.group.GroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.group.GroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.group.GroupConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of this group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group#name Group#name}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.group.GroupConfig.property.path"></a>

```go
Path *string
```

- *Type:* *string

The path of the group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group#path Group#path}

---

##### `AutoDevopsEnabled`<sup>Optional</sup> <a name="AutoDevopsEnabled" id="@cdktf/provider-gitlab.group.GroupConfig.property.autoDevopsEnabled"></a>

```go
AutoDevopsEnabled interface{}
```

- *Type:* interface{}

Defaults to false. Default to Auto DevOps pipeline for all projects within this group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group#auto_devops_enabled Group#auto_devops_enabled}

---

##### `Avatar`<sup>Optional</sup> <a name="Avatar" id="@cdktf/provider-gitlab.group.GroupConfig.property.avatar"></a>

```go
Avatar *string
```

- *Type:* *string

A local path to the avatar image to upload. **Note**: not available for imported resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group#avatar Group#avatar}

---

##### `AvatarHash`<sup>Optional</sup> <a name="AvatarHash" id="@cdktf/provider-gitlab.group.GroupConfig.property.avatarHash"></a>

```go
AvatarHash *string
```

- *Type:* *string

The hash of the avatar image.

Use `filesha256("path/to/avatar.png")` whenever possible. **Note**: this is used to trigger an update of the avatar. If it's not given, but an avatar is given, the avatar will be updated each time.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group#avatar_hash Group#avatar_hash}

---

##### `DefaultBranchProtection`<sup>Optional</sup> <a name="DefaultBranchProtection" id="@cdktf/provider-gitlab.group.GroupConfig.property.defaultBranchProtection"></a>

```go
DefaultBranchProtection *f64
```

- *Type:* *f64

Defaults to 2. See https://docs.gitlab.com/ee/api/groups.html#options-for-default_branch_protection.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group#default_branch_protection Group#default_branch_protection}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-gitlab.group.GroupConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group#description Group#description}

---

##### `EmailsDisabled`<sup>Optional</sup> <a name="EmailsDisabled" id="@cdktf/provider-gitlab.group.GroupConfig.property.emailsDisabled"></a>

```go
EmailsDisabled interface{}
```

- *Type:* interface{}

Defaults to false. Disable email notifications.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group#emails_disabled Group#emails_disabled}

---

##### `ExtraSharedRunnersMinutesLimit`<sup>Optional</sup> <a name="ExtraSharedRunnersMinutesLimit" id="@cdktf/provider-gitlab.group.GroupConfig.property.extraSharedRunnersMinutesLimit"></a>

```go
ExtraSharedRunnersMinutesLimit *f64
```

- *Type:* *f64

Can be set by administrators only. Additional CI/CD minutes for this group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group#extra_shared_runners_minutes_limit Group#extra_shared_runners_minutes_limit}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-gitlab.group.GroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group#id Group#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpRestrictionRanges`<sup>Optional</sup> <a name="IpRestrictionRanges" id="@cdktf/provider-gitlab.group.GroupConfig.property.ipRestrictionRanges"></a>

```go
IpRestrictionRanges *[]*string
```

- *Type:* *[]*string

A list of IP addresses or subnet masks to restrict group access.

Will be concatenated together into a comma separated string. Only allowed on top level groups.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group#ip_restriction_ranges Group#ip_restriction_ranges}

---

##### `LfsEnabled`<sup>Optional</sup> <a name="LfsEnabled" id="@cdktf/provider-gitlab.group.GroupConfig.property.lfsEnabled"></a>

```go
LfsEnabled interface{}
```

- *Type:* interface{}

Defaults to true. Enable/disable Large File Storage (LFS) for the projects in this group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group#lfs_enabled Group#lfs_enabled}

---

##### `MembershipLock`<sup>Optional</sup> <a name="MembershipLock" id="@cdktf/provider-gitlab.group.GroupConfig.property.membershipLock"></a>

```go
MembershipLock interface{}
```

- *Type:* interface{}

Users cannot be added to projects in this group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group#membership_lock Group#membership_lock}

---

##### `MentionsDisabled`<sup>Optional</sup> <a name="MentionsDisabled" id="@cdktf/provider-gitlab.group.GroupConfig.property.mentionsDisabled"></a>

```go
MentionsDisabled interface{}
```

- *Type:* interface{}

Defaults to false. Disable the capability of a group from getting mentioned.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group#mentions_disabled Group#mentions_disabled}

---

##### `ParentId`<sup>Optional</sup> <a name="ParentId" id="@cdktf/provider-gitlab.group.GroupConfig.property.parentId"></a>

```go
ParentId *f64
```

- *Type:* *f64

Id of the parent group (creates a nested group).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group#parent_id Group#parent_id}

---

##### `PreventForkingOutsideGroup`<sup>Optional</sup> <a name="PreventForkingOutsideGroup" id="@cdktf/provider-gitlab.group.GroupConfig.property.preventForkingOutsideGroup"></a>

```go
PreventForkingOutsideGroup interface{}
```

- *Type:* interface{}

Defaults to false. When enabled, users can not fork projects from this group to external namespaces.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group#prevent_forking_outside_group Group#prevent_forking_outside_group}

---

##### `ProjectCreationLevel`<sup>Optional</sup> <a name="ProjectCreationLevel" id="@cdktf/provider-gitlab.group.GroupConfig.property.projectCreationLevel"></a>

```go
ProjectCreationLevel *string
```

- *Type:* *string

Defaults to maintainer. Determine if developers can create projects in the group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group#project_creation_level Group#project_creation_level}

---

##### `RequestAccessEnabled`<sup>Optional</sup> <a name="RequestAccessEnabled" id="@cdktf/provider-gitlab.group.GroupConfig.property.requestAccessEnabled"></a>

```go
RequestAccessEnabled interface{}
```

- *Type:* interface{}

Defaults to false. Allow users to request member access.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group#request_access_enabled Group#request_access_enabled}

---

##### `RequireTwoFactorAuthentication`<sup>Optional</sup> <a name="RequireTwoFactorAuthentication" id="@cdktf/provider-gitlab.group.GroupConfig.property.requireTwoFactorAuthentication"></a>

```go
RequireTwoFactorAuthentication interface{}
```

- *Type:* interface{}

Defaults to false. Require all users in this group to setup Two-factor authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group#require_two_factor_authentication Group#require_two_factor_authentication}

---

##### `SharedRunnersMinutesLimit`<sup>Optional</sup> <a name="SharedRunnersMinutesLimit" id="@cdktf/provider-gitlab.group.GroupConfig.property.sharedRunnersMinutesLimit"></a>

```go
SharedRunnersMinutesLimit *f64
```

- *Type:* *f64

Can be set by administrators only.

Maximum number of monthly CI/CD minutes for this group. Can be nil (default; inherit system default), 0 (unlimited), or > 0.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group#shared_runners_minutes_limit Group#shared_runners_minutes_limit}

---

##### `ShareWithGroupLock`<sup>Optional</sup> <a name="ShareWithGroupLock" id="@cdktf/provider-gitlab.group.GroupConfig.property.shareWithGroupLock"></a>

```go
ShareWithGroupLock interface{}
```

- *Type:* interface{}

Defaults to false. Prevent sharing a project with another group within this group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group#share_with_group_lock Group#share_with_group_lock}

---

##### `SubgroupCreationLevel`<sup>Optional</sup> <a name="SubgroupCreationLevel" id="@cdktf/provider-gitlab.group.GroupConfig.property.subgroupCreationLevel"></a>

```go
SubgroupCreationLevel *string
```

- *Type:* *string

Defaults to owner. Allowed to create subgroups.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group#subgroup_creation_level Group#subgroup_creation_level}

---

##### `TwoFactorGracePeriod`<sup>Optional</sup> <a name="TwoFactorGracePeriod" id="@cdktf/provider-gitlab.group.GroupConfig.property.twoFactorGracePeriod"></a>

```go
TwoFactorGracePeriod *f64
```

- *Type:* *f64

Defaults to 48. Time before Two-factor authentication is enforced (in hours).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group#two_factor_grace_period Group#two_factor_grace_period}

---

##### `VisibilityLevel`<sup>Optional</sup> <a name="VisibilityLevel" id="@cdktf/provider-gitlab.group.GroupConfig.property.visibilityLevel"></a>

```go
VisibilityLevel *string
```

- *Type:* *string

The group's visibility. Can be `private`, `internal`, or `public`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group#visibility_level Group#visibility_level}

---



