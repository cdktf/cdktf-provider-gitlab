# `group` Submodule <a name="`group` Submodule" id="@cdktf/provider-gitlab.group"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Group <a name="Group" id="@cdktf/provider-gitlab.group.Group"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/group gitlab_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.group.Group.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/group"

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
| <code><a href="#@cdktf/provider-gitlab.group.Group.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.group.Group.putDefaultBranchProtectionDefaults">PutDefaultBranchProtectionDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.putPushRules">PutPushRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetAutoDevopsEnabled">ResetAutoDevopsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetAvatar">ResetAvatar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetAvatarHash">ResetAvatarHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetDefaultBranch">ResetDefaultBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetDefaultBranchProtection">ResetDefaultBranchProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetDefaultBranchProtectionDefaults">ResetDefaultBranchProtectionDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetEmailsEnabled">ResetEmailsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetExtraSharedRunnersMinutesLimit">ResetExtraSharedRunnersMinutesLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetIpRestrictionRanges">ResetIpRestrictionRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetLfsEnabled">ResetLfsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetMembershipLock">ResetMembershipLock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetMentionsDisabled">ResetMentionsDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetParentId">ResetParentId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetPermanentlyRemoveOnDelete">ResetPermanentlyRemoveOnDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetPreventForkingOutsideGroup">ResetPreventForkingOutsideGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetProjectCreationLevel">ResetProjectCreationLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetPushRules">ResetPushRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetRequestAccessEnabled">ResetRequestAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetRequireTwoFactorAuthentication">ResetRequireTwoFactorAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetSharedRunnersMinutesLimit">ResetSharedRunnersMinutesLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetSharedRunnersSetting">ResetSharedRunnersSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetShareWithGroupLock">ResetShareWithGroupLock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetSubgroupCreationLevel">ResetSubgroupCreationLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetTwoFactorGracePeriod">ResetTwoFactorGracePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetVisibilityLevel">ResetVisibilityLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetWikiAccessLevel">ResetWikiAccessLevel</a></code> | *No description.* |

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

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.group.Group.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.group.Group.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.group.Group.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-gitlab.group.Group.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.group.Group.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

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

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-gitlab.group.Group.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-gitlab.group.Group.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.group.Group.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.group.Group.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.group.Group.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.Group.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-gitlab.group.Group.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.group.Group.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-gitlab.group.Group.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.group.Group.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.group.Group.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-gitlab.group.Group.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.group.Group.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDefaultBranchProtectionDefaults` <a name="PutDefaultBranchProtectionDefaults" id="@cdktf/provider-gitlab.group.Group.putDefaultBranchProtectionDefaults"></a>

```go
func PutDefaultBranchProtectionDefaults(value GroupDefaultBranchProtectionDefaults)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.group.Group.putDefaultBranchProtectionDefaults.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults">GroupDefaultBranchProtectionDefaults</a>

---

##### `PutPushRules` <a name="PutPushRules" id="@cdktf/provider-gitlab.group.Group.putPushRules"></a>

```go
func PutPushRules(value GroupPushRules)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.group.Group.putPushRules.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.group.GroupPushRules">GroupPushRules</a>

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

##### `ResetDefaultBranch` <a name="ResetDefaultBranch" id="@cdktf/provider-gitlab.group.Group.resetDefaultBranch"></a>

```go
func ResetDefaultBranch()
```

##### `ResetDefaultBranchProtection` <a name="ResetDefaultBranchProtection" id="@cdktf/provider-gitlab.group.Group.resetDefaultBranchProtection"></a>

```go
func ResetDefaultBranchProtection()
```

##### `ResetDefaultBranchProtectionDefaults` <a name="ResetDefaultBranchProtectionDefaults" id="@cdktf/provider-gitlab.group.Group.resetDefaultBranchProtectionDefaults"></a>

```go
func ResetDefaultBranchProtectionDefaults()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-gitlab.group.Group.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEmailsEnabled` <a name="ResetEmailsEnabled" id="@cdktf/provider-gitlab.group.Group.resetEmailsEnabled"></a>

```go
func ResetEmailsEnabled()
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

##### `ResetPermanentlyRemoveOnDelete` <a name="ResetPermanentlyRemoveOnDelete" id="@cdktf/provider-gitlab.group.Group.resetPermanentlyRemoveOnDelete"></a>

```go
func ResetPermanentlyRemoveOnDelete()
```

##### `ResetPreventForkingOutsideGroup` <a name="ResetPreventForkingOutsideGroup" id="@cdktf/provider-gitlab.group.Group.resetPreventForkingOutsideGroup"></a>

```go
func ResetPreventForkingOutsideGroup()
```

##### `ResetProjectCreationLevel` <a name="ResetProjectCreationLevel" id="@cdktf/provider-gitlab.group.Group.resetProjectCreationLevel"></a>

```go
func ResetProjectCreationLevel()
```

##### `ResetPushRules` <a name="ResetPushRules" id="@cdktf/provider-gitlab.group.Group.resetPushRules"></a>

```go
func ResetPushRules()
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

##### `ResetSharedRunnersSetting` <a name="ResetSharedRunnersSetting" id="@cdktf/provider-gitlab.group.Group.resetSharedRunnersSetting"></a>

```go
func ResetSharedRunnersSetting()
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

##### `ResetWikiAccessLevel` <a name="ResetWikiAccessLevel" id="@cdktf/provider-gitlab.group.Group.resetWikiAccessLevel"></a>

```go
func ResetWikiAccessLevel()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.Group.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Group resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.group.Group.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/group"

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
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/group"

group.Group_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.group.Group.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.group.Group.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/group"

group.Group_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.group.Group.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.group.Group.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/group"

group.Group_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Group resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.group.Group.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.group.Group.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Group to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.group.Group.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Group that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.group.Group.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Group to import is found.

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
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.avatarUrl">AvatarUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.defaultBranchProtectionDefaults">DefaultBranchProtectionDefaults</a></code> | <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference">GroupDefaultBranchProtectionDefaultsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.fullName">FullName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.fullPath">FullPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.pushRules">PushRules</a></code> | <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference">GroupPushRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.runnersToken">RunnersToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.webUrl">WebUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.autoDevopsEnabledInput">AutoDevopsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.avatarHashInput">AvatarHashInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.avatarInput">AvatarInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.defaultBranchInput">DefaultBranchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.defaultBranchProtectionDefaultsInput">DefaultBranchProtectionDefaultsInput</a></code> | <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults">GroupDefaultBranchProtectionDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.defaultBranchProtectionInput">DefaultBranchProtectionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.emailsEnabledInput">EmailsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.extraSharedRunnersMinutesLimitInput">ExtraSharedRunnersMinutesLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.ipRestrictionRangesInput">IpRestrictionRangesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.lfsEnabledInput">LfsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.membershipLockInput">MembershipLockInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.mentionsDisabledInput">MentionsDisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.parentIdInput">ParentIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.permanentlyRemoveOnDeleteInput">PermanentlyRemoveOnDeleteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.preventForkingOutsideGroupInput">PreventForkingOutsideGroupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.projectCreationLevelInput">ProjectCreationLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.pushRulesInput">PushRulesInput</a></code> | <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules">GroupPushRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.requestAccessEnabledInput">RequestAccessEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.requireTwoFactorAuthenticationInput">RequireTwoFactorAuthenticationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.sharedRunnersMinutesLimitInput">SharedRunnersMinutesLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.sharedRunnersSettingInput">SharedRunnersSettingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.shareWithGroupLockInput">ShareWithGroupLockInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.subgroupCreationLevelInput">SubgroupCreationLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.twoFactorGracePeriodInput">TwoFactorGracePeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.visibilityLevelInput">VisibilityLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.wikiAccessLevelInput">WikiAccessLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.autoDevopsEnabled">AutoDevopsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.avatar">Avatar</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.avatarHash">AvatarHash</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.defaultBranch">DefaultBranch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.defaultBranchProtection">DefaultBranchProtection</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.emailsEnabled">EmailsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.extraSharedRunnersMinutesLimit">ExtraSharedRunnersMinutesLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.ipRestrictionRanges">IpRestrictionRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.lfsEnabled">LfsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.membershipLock">MembershipLock</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.mentionsDisabled">MentionsDisabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.parentId">ParentId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.permanentlyRemoveOnDelete">PermanentlyRemoveOnDelete</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.preventForkingOutsideGroup">PreventForkingOutsideGroup</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.projectCreationLevel">ProjectCreationLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.requestAccessEnabled">RequestAccessEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.requireTwoFactorAuthentication">RequireTwoFactorAuthentication</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.sharedRunnersMinutesLimit">SharedRunnersMinutesLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.sharedRunnersSetting">SharedRunnersSetting</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.shareWithGroupLock">ShareWithGroupLock</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.subgroupCreationLevel">SubgroupCreationLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.twoFactorGracePeriod">TwoFactorGracePeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.visibilityLevel">VisibilityLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.wikiAccessLevel">WikiAccessLevel</a></code> | <code>*string</code> | *No description.* |

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
func Count() interface{}
```

- *Type:* interface{}

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

##### `DefaultBranchProtectionDefaults`<sup>Required</sup> <a name="DefaultBranchProtectionDefaults" id="@cdktf/provider-gitlab.group.Group.property.defaultBranchProtectionDefaults"></a>

```go
func DefaultBranchProtectionDefaults() GroupDefaultBranchProtectionDefaultsOutputReference
```

- *Type:* <a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference">GroupDefaultBranchProtectionDefaultsOutputReference</a>

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

##### `PushRules`<sup>Required</sup> <a name="PushRules" id="@cdktf/provider-gitlab.group.Group.property.pushRules"></a>

```go
func PushRules() GroupPushRulesOutputReference
```

- *Type:* <a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference">GroupPushRulesOutputReference</a>

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

##### `DefaultBranchInput`<sup>Optional</sup> <a name="DefaultBranchInput" id="@cdktf/provider-gitlab.group.Group.property.defaultBranchInput"></a>

```go
func DefaultBranchInput() *string
```

- *Type:* *string

---

##### `DefaultBranchProtectionDefaultsInput`<sup>Optional</sup> <a name="DefaultBranchProtectionDefaultsInput" id="@cdktf/provider-gitlab.group.Group.property.defaultBranchProtectionDefaultsInput"></a>

```go
func DefaultBranchProtectionDefaultsInput() GroupDefaultBranchProtectionDefaults
```

- *Type:* <a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults">GroupDefaultBranchProtectionDefaults</a>

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

##### `EmailsEnabledInput`<sup>Optional</sup> <a name="EmailsEnabledInput" id="@cdktf/provider-gitlab.group.Group.property.emailsEnabledInput"></a>

```go
func EmailsEnabledInput() interface{}
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

##### `PermanentlyRemoveOnDeleteInput`<sup>Optional</sup> <a name="PermanentlyRemoveOnDeleteInput" id="@cdktf/provider-gitlab.group.Group.property.permanentlyRemoveOnDeleteInput"></a>

```go
func PermanentlyRemoveOnDeleteInput() interface{}
```

- *Type:* interface{}

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

##### `PushRulesInput`<sup>Optional</sup> <a name="PushRulesInput" id="@cdktf/provider-gitlab.group.Group.property.pushRulesInput"></a>

```go
func PushRulesInput() GroupPushRules
```

- *Type:* <a href="#@cdktf/provider-gitlab.group.GroupPushRules">GroupPushRules</a>

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

##### `SharedRunnersSettingInput`<sup>Optional</sup> <a name="SharedRunnersSettingInput" id="@cdktf/provider-gitlab.group.Group.property.sharedRunnersSettingInput"></a>

```go
func SharedRunnersSettingInput() *string
```

- *Type:* *string

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

##### `WikiAccessLevelInput`<sup>Optional</sup> <a name="WikiAccessLevelInput" id="@cdktf/provider-gitlab.group.Group.property.wikiAccessLevelInput"></a>

```go
func WikiAccessLevelInput() *string
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

##### `DefaultBranch`<sup>Required</sup> <a name="DefaultBranch" id="@cdktf/provider-gitlab.group.Group.property.defaultBranch"></a>

```go
func DefaultBranch() *string
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

##### `EmailsEnabled`<sup>Required</sup> <a name="EmailsEnabled" id="@cdktf/provider-gitlab.group.Group.property.emailsEnabled"></a>

```go
func EmailsEnabled() interface{}
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

##### `PermanentlyRemoveOnDelete`<sup>Required</sup> <a name="PermanentlyRemoveOnDelete" id="@cdktf/provider-gitlab.group.Group.property.permanentlyRemoveOnDelete"></a>

```go
func PermanentlyRemoveOnDelete() interface{}
```

- *Type:* interface{}

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

##### `SharedRunnersSetting`<sup>Required</sup> <a name="SharedRunnersSetting" id="@cdktf/provider-gitlab.group.Group.property.sharedRunnersSetting"></a>

```go
func SharedRunnersSetting() *string
```

- *Type:* *string

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

##### `WikiAccessLevel`<sup>Required</sup> <a name="WikiAccessLevel" id="@cdktf/provider-gitlab.group.Group.property.wikiAccessLevel"></a>

```go
func WikiAccessLevel() *string
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
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/group"

&group.GroupConfig {
	Connection: interface{},
	Count: interface{},
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
	DefaultBranch: *string,
	DefaultBranchProtection: *f64,
	DefaultBranchProtectionDefaults: github.com/cdktf/cdktf-provider-gitlab-go/gitlab.group.GroupDefaultBranchProtectionDefaults,
	Description: *string,
	EmailsEnabled: interface{},
	ExtraSharedRunnersMinutesLimit: *f64,
	Id: *string,
	IpRestrictionRanges: *[]*string,
	LfsEnabled: interface{},
	MembershipLock: interface{},
	MentionsDisabled: interface{},
	ParentId: *f64,
	PermanentlyRemoveOnDelete: interface{},
	PreventForkingOutsideGroup: interface{},
	ProjectCreationLevel: *string,
	PushRules: github.com/cdktf/cdktf-provider-gitlab-go/gitlab.group.GroupPushRules,
	RequestAccessEnabled: interface{},
	RequireTwoFactorAuthentication: interface{},
	SharedRunnersMinutesLimit: *f64,
	SharedRunnersSetting: *string,
	ShareWithGroupLock: interface{},
	SubgroupCreationLevel: *string,
	TwoFactorGracePeriod: *f64,
	VisibilityLevel: *string,
	WikiAccessLevel: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.name">Name</a></code> | <code>*string</code> | The name of the group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.path">Path</a></code> | <code>*string</code> | The path of the group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.autoDevopsEnabled">AutoDevopsEnabled</a></code> | <code>interface{}</code> | Default to Auto DevOps pipeline for all projects within this group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.avatar">Avatar</a></code> | <code>*string</code> | A local path to the avatar image to upload. **Note**: not available for imported resources. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.avatarHash">AvatarHash</a></code> | <code>*string</code> | The hash of the avatar image. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.defaultBranch">DefaultBranch</a></code> | <code>*string</code> | Initial default branch name. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.defaultBranchProtection">DefaultBranchProtection</a></code> | <code>*f64</code> | See https://docs.gitlab.com/ee/api/groups.html#options-for-default_branch_protection. Valid values are: `0`, `1`, `2`, `3`, `4`. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.defaultBranchProtectionDefaults">DefaultBranchProtectionDefaults</a></code> | <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults">GroupDefaultBranchProtectionDefaults</a></code> | default_branch_protection_defaults block. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.description">Description</a></code> | <code>*string</code> | The group's description. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.emailsEnabled">EmailsEnabled</a></code> | <code>interface{}</code> | Enable email notifications. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.extraSharedRunnersMinutesLimit">ExtraSharedRunnersMinutesLimit</a></code> | <code>*f64</code> | Can be set by administrators only. Additional CI/CD minutes for this group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/group#id Group#id}. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.ipRestrictionRanges">IpRestrictionRanges</a></code> | <code>*[]*string</code> | A list of IP addresses or subnet masks to restrict group access. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.lfsEnabled">LfsEnabled</a></code> | <code>interface{}</code> | Enable/disable Large File Storage (LFS) for the projects in this group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.membershipLock">MembershipLock</a></code> | <code>interface{}</code> | Users cannot be added to projects in this group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.mentionsDisabled">MentionsDisabled</a></code> | <code>interface{}</code> | Disable the capability of a group from getting mentioned. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.parentId">ParentId</a></code> | <code>*f64</code> | Id of the parent group (creates a nested group). |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.permanentlyRemoveOnDelete">PermanentlyRemoveOnDelete</a></code> | <code>interface{}</code> | Whether the group should be permanently removed during a `delete` operation. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.preventForkingOutsideGroup">PreventForkingOutsideGroup</a></code> | <code>interface{}</code> | Defaults to false. When enabled, users can not fork projects from this group to external namespaces. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.projectCreationLevel">ProjectCreationLevel</a></code> | <code>*string</code> | Determine if developers can create projects in the group. Valid values are: `noone`, `maintainer`, `developer`. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.pushRules">PushRules</a></code> | <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules">GroupPushRules</a></code> | push_rules block. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.requestAccessEnabled">RequestAccessEnabled</a></code> | <code>interface{}</code> | Allow users to request member access. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.requireTwoFactorAuthentication">RequireTwoFactorAuthentication</a></code> | <code>interface{}</code> | Require all users in this group to setup Two-factor authentication. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.sharedRunnersMinutesLimit">SharedRunnersMinutesLimit</a></code> | <code>*f64</code> | Can be set by administrators only. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.sharedRunnersSetting">SharedRunnersSetting</a></code> | <code>*string</code> | Enable or disable shared runners for a group’s subgroups and projects. Valid values are: `enabled`, `disabled_and_overridable`, `disabled_and_unoverridable`, `disabled_with_override`. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.shareWithGroupLock">ShareWithGroupLock</a></code> | <code>interface{}</code> | Prevent sharing a project with another group within this group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.subgroupCreationLevel">SubgroupCreationLevel</a></code> | <code>*string</code> | Allowed to create subgroups. Valid values are: `owner`, `maintainer`. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.twoFactorGracePeriod">TwoFactorGracePeriod</a></code> | <code>*f64</code> | Defaults to 48. Time before Two-factor authentication is enforced (in hours). |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.visibilityLevel">VisibilityLevel</a></code> | <code>*string</code> | The group's visibility. Can be `private`, `internal`, or `public`. Valid values are: `private`, `internal`, `public`. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.wikiAccessLevel">WikiAccessLevel</a></code> | <code>*string</code> | The group's wiki access level. Only available on Premium and Ultimate plans. Valid values are `disabled`, `private`, `enabled`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.group.GroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.group.GroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

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

The name of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/group#name Group#name}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.group.GroupConfig.property.path"></a>

```go
Path *string
```

- *Type:* *string

The path of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/group#path Group#path}

---

##### `AutoDevopsEnabled`<sup>Optional</sup> <a name="AutoDevopsEnabled" id="@cdktf/provider-gitlab.group.GroupConfig.property.autoDevopsEnabled"></a>

```go
AutoDevopsEnabled interface{}
```

- *Type:* interface{}

Default to Auto DevOps pipeline for all projects within this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/group#auto_devops_enabled Group#auto_devops_enabled}

---

##### `Avatar`<sup>Optional</sup> <a name="Avatar" id="@cdktf/provider-gitlab.group.GroupConfig.property.avatar"></a>

```go
Avatar *string
```

- *Type:* *string

A local path to the avatar image to upload. **Note**: not available for imported resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/group#avatar Group#avatar}

---

##### `AvatarHash`<sup>Optional</sup> <a name="AvatarHash" id="@cdktf/provider-gitlab.group.GroupConfig.property.avatarHash"></a>

```go
AvatarHash *string
```

- *Type:* *string

The hash of the avatar image.

Use `filesha256("path/to/avatar.png")` whenever possible. **Note**: this is used to trigger an update of the avatar. If it's not given, but an avatar is given, the avatar will be updated each time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/group#avatar_hash Group#avatar_hash}

---

##### `DefaultBranch`<sup>Optional</sup> <a name="DefaultBranch" id="@cdktf/provider-gitlab.group.GroupConfig.property.defaultBranch"></a>

```go
DefaultBranch *string
```

- *Type:* *string

Initial default branch name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/group#default_branch Group#default_branch}

---

##### `DefaultBranchProtection`<sup>Optional</sup> <a name="DefaultBranchProtection" id="@cdktf/provider-gitlab.group.GroupConfig.property.defaultBranchProtection"></a>

```go
DefaultBranchProtection *f64
```

- *Type:* *f64

See https://docs.gitlab.com/ee/api/groups.html#options-for-default_branch_protection. Valid values are: `0`, `1`, `2`, `3`, `4`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/group#default_branch_protection Group#default_branch_protection}

---

##### `DefaultBranchProtectionDefaults`<sup>Optional</sup> <a name="DefaultBranchProtectionDefaults" id="@cdktf/provider-gitlab.group.GroupConfig.property.defaultBranchProtectionDefaults"></a>

```go
DefaultBranchProtectionDefaults GroupDefaultBranchProtectionDefaults
```

- *Type:* <a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults">GroupDefaultBranchProtectionDefaults</a>

default_branch_protection_defaults block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/group#default_branch_protection_defaults Group#default_branch_protection_defaults}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-gitlab.group.GroupConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The group's description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/group#description Group#description}

---

##### `EmailsEnabled`<sup>Optional</sup> <a name="EmailsEnabled" id="@cdktf/provider-gitlab.group.GroupConfig.property.emailsEnabled"></a>

```go
EmailsEnabled interface{}
```

- *Type:* interface{}

Enable email notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/group#emails_enabled Group#emails_enabled}

---

##### `ExtraSharedRunnersMinutesLimit`<sup>Optional</sup> <a name="ExtraSharedRunnersMinutesLimit" id="@cdktf/provider-gitlab.group.GroupConfig.property.extraSharedRunnersMinutesLimit"></a>

```go
ExtraSharedRunnersMinutesLimit *f64
```

- *Type:* *f64

Can be set by administrators only. Additional CI/CD minutes for this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/group#extra_shared_runners_minutes_limit Group#extra_shared_runners_minutes_limit}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-gitlab.group.GroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/group#id Group#id}.

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/group#ip_restriction_ranges Group#ip_restriction_ranges}

---

##### `LfsEnabled`<sup>Optional</sup> <a name="LfsEnabled" id="@cdktf/provider-gitlab.group.GroupConfig.property.lfsEnabled"></a>

```go
LfsEnabled interface{}
```

- *Type:* interface{}

Enable/disable Large File Storage (LFS) for the projects in this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/group#lfs_enabled Group#lfs_enabled}

---

##### `MembershipLock`<sup>Optional</sup> <a name="MembershipLock" id="@cdktf/provider-gitlab.group.GroupConfig.property.membershipLock"></a>

```go
MembershipLock interface{}
```

- *Type:* interface{}

Users cannot be added to projects in this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/group#membership_lock Group#membership_lock}

---

##### `MentionsDisabled`<sup>Optional</sup> <a name="MentionsDisabled" id="@cdktf/provider-gitlab.group.GroupConfig.property.mentionsDisabled"></a>

```go
MentionsDisabled interface{}
```

- *Type:* interface{}

Disable the capability of a group from getting mentioned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/group#mentions_disabled Group#mentions_disabled}

---

##### `ParentId`<sup>Optional</sup> <a name="ParentId" id="@cdktf/provider-gitlab.group.GroupConfig.property.parentId"></a>

```go
ParentId *f64
```

- *Type:* *f64

Id of the parent group (creates a nested group).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/group#parent_id Group#parent_id}

---

##### `PermanentlyRemoveOnDelete`<sup>Optional</sup> <a name="PermanentlyRemoveOnDelete" id="@cdktf/provider-gitlab.group.GroupConfig.property.permanentlyRemoveOnDelete"></a>

```go
PermanentlyRemoveOnDelete interface{}
```

- *Type:* interface{}

Whether the group should be permanently removed during a `delete` operation.

This only works with subgroups. Must be configured via an `apply` before the `destroy` is run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/group#permanently_remove_on_delete Group#permanently_remove_on_delete}

---

##### `PreventForkingOutsideGroup`<sup>Optional</sup> <a name="PreventForkingOutsideGroup" id="@cdktf/provider-gitlab.group.GroupConfig.property.preventForkingOutsideGroup"></a>

```go
PreventForkingOutsideGroup interface{}
```

- *Type:* interface{}

Defaults to false. When enabled, users can not fork projects from this group to external namespaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/group#prevent_forking_outside_group Group#prevent_forking_outside_group}

---

##### `ProjectCreationLevel`<sup>Optional</sup> <a name="ProjectCreationLevel" id="@cdktf/provider-gitlab.group.GroupConfig.property.projectCreationLevel"></a>

```go
ProjectCreationLevel *string
```

- *Type:* *string

Determine if developers can create projects in the group. Valid values are: `noone`, `maintainer`, `developer`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/group#project_creation_level Group#project_creation_level}

---

##### `PushRules`<sup>Optional</sup> <a name="PushRules" id="@cdktf/provider-gitlab.group.GroupConfig.property.pushRules"></a>

```go
PushRules GroupPushRules
```

- *Type:* <a href="#@cdktf/provider-gitlab.group.GroupPushRules">GroupPushRules</a>

push_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/group#push_rules Group#push_rules}

---

##### `RequestAccessEnabled`<sup>Optional</sup> <a name="RequestAccessEnabled" id="@cdktf/provider-gitlab.group.GroupConfig.property.requestAccessEnabled"></a>

```go
RequestAccessEnabled interface{}
```

- *Type:* interface{}

Allow users to request member access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/group#request_access_enabled Group#request_access_enabled}

---

##### `RequireTwoFactorAuthentication`<sup>Optional</sup> <a name="RequireTwoFactorAuthentication" id="@cdktf/provider-gitlab.group.GroupConfig.property.requireTwoFactorAuthentication"></a>

```go
RequireTwoFactorAuthentication interface{}
```

- *Type:* interface{}

Require all users in this group to setup Two-factor authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/group#require_two_factor_authentication Group#require_two_factor_authentication}

---

##### `SharedRunnersMinutesLimit`<sup>Optional</sup> <a name="SharedRunnersMinutesLimit" id="@cdktf/provider-gitlab.group.GroupConfig.property.sharedRunnersMinutesLimit"></a>

```go
SharedRunnersMinutesLimit *f64
```

- *Type:* *f64

Can be set by administrators only.

Maximum number of monthly CI/CD minutes for this group. Can be nil (default; inherit system default), 0 (unlimited), or > 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/group#shared_runners_minutes_limit Group#shared_runners_minutes_limit}

---

##### `SharedRunnersSetting`<sup>Optional</sup> <a name="SharedRunnersSetting" id="@cdktf/provider-gitlab.group.GroupConfig.property.sharedRunnersSetting"></a>

```go
SharedRunnersSetting *string
```

- *Type:* *string

Enable or disable shared runners for a group’s subgroups and projects. Valid values are: `enabled`, `disabled_and_overridable`, `disabled_and_unoverridable`, `disabled_with_override`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/group#shared_runners_setting Group#shared_runners_setting}

---

##### `ShareWithGroupLock`<sup>Optional</sup> <a name="ShareWithGroupLock" id="@cdktf/provider-gitlab.group.GroupConfig.property.shareWithGroupLock"></a>

```go
ShareWithGroupLock interface{}
```

- *Type:* interface{}

Prevent sharing a project with another group within this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/group#share_with_group_lock Group#share_with_group_lock}

---

##### `SubgroupCreationLevel`<sup>Optional</sup> <a name="SubgroupCreationLevel" id="@cdktf/provider-gitlab.group.GroupConfig.property.subgroupCreationLevel"></a>

```go
SubgroupCreationLevel *string
```

- *Type:* *string

Allowed to create subgroups. Valid values are: `owner`, `maintainer`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/group#subgroup_creation_level Group#subgroup_creation_level}

---

##### `TwoFactorGracePeriod`<sup>Optional</sup> <a name="TwoFactorGracePeriod" id="@cdktf/provider-gitlab.group.GroupConfig.property.twoFactorGracePeriod"></a>

```go
TwoFactorGracePeriod *f64
```

- *Type:* *f64

Defaults to 48. Time before Two-factor authentication is enforced (in hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/group#two_factor_grace_period Group#two_factor_grace_period}

---

##### `VisibilityLevel`<sup>Optional</sup> <a name="VisibilityLevel" id="@cdktf/provider-gitlab.group.GroupConfig.property.visibilityLevel"></a>

```go
VisibilityLevel *string
```

- *Type:* *string

The group's visibility. Can be `private`, `internal`, or `public`. Valid values are: `private`, `internal`, `public`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/group#visibility_level Group#visibility_level}

---

##### `WikiAccessLevel`<sup>Optional</sup> <a name="WikiAccessLevel" id="@cdktf/provider-gitlab.group.GroupConfig.property.wikiAccessLevel"></a>

```go
WikiAccessLevel *string
```

- *Type:* *string

The group's wiki access level. Only available on Premium and Ultimate plans. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/group#wiki_access_level Group#wiki_access_level}

---

### GroupDefaultBranchProtectionDefaults <a name="GroupDefaultBranchProtectionDefaults" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/group"

&group.GroupDefaultBranchProtectionDefaults {
	AllowedToMerge: *[]*string,
	AllowedToPush: *[]*string,
	AllowForcePush: interface{},
	DeveloperCanInitialPush: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults.property.allowedToMerge">AllowedToMerge</a></code> | <code>*[]*string</code> | An array of access levels allowed to merge. Valid values are: `developer`, `maintainer`, `no one`. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults.property.allowedToPush">AllowedToPush</a></code> | <code>*[]*string</code> | An array of access levels allowed to push. Valid values are: `developer`, `maintainer`, `no one`. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults.property.allowForcePush">AllowForcePush</a></code> | <code>interface{}</code> | Allow force push for all users with push access. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults.property.developerCanInitialPush">DeveloperCanInitialPush</a></code> | <code>interface{}</code> | Allow developers to initial push. |

---

##### `AllowedToMerge`<sup>Optional</sup> <a name="AllowedToMerge" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults.property.allowedToMerge"></a>

```go
AllowedToMerge *[]*string
```

- *Type:* *[]*string

An array of access levels allowed to merge. Valid values are: `developer`, `maintainer`, `no one`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/group#allowed_to_merge Group#allowed_to_merge}

---

##### `AllowedToPush`<sup>Optional</sup> <a name="AllowedToPush" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults.property.allowedToPush"></a>

```go
AllowedToPush *[]*string
```

- *Type:* *[]*string

An array of access levels allowed to push. Valid values are: `developer`, `maintainer`, `no one`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/group#allowed_to_push Group#allowed_to_push}

---

##### `AllowForcePush`<sup>Optional</sup> <a name="AllowForcePush" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults.property.allowForcePush"></a>

```go
AllowForcePush interface{}
```

- *Type:* interface{}

Allow force push for all users with push access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/group#allow_force_push Group#allow_force_push}

---

##### `DeveloperCanInitialPush`<sup>Optional</sup> <a name="DeveloperCanInitialPush" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults.property.developerCanInitialPush"></a>

```go
DeveloperCanInitialPush interface{}
```

- *Type:* interface{}

Allow developers to initial push.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/group#developer_can_initial_push Group#developer_can_initial_push}

---

### GroupPushRules <a name="GroupPushRules" id="@cdktf/provider-gitlab.group.GroupPushRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.group.GroupPushRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/group"

&group.GroupPushRules {
	AuthorEmailRegex: *string,
	BranchNameRegex: *string,
	CommitCommitterCheck: interface{},
	CommitCommitterNameCheck: interface{},
	CommitMessageNegativeRegex: *string,
	CommitMessageRegex: *string,
	DenyDeleteTag: interface{},
	FileNameRegex: *string,
	MaxFileSize: *f64,
	MemberCheck: interface{},
	PreventSecrets: interface{},
	RejectNonDcoCommits: interface{},
	RejectUnsignedCommits: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules.property.authorEmailRegex">AuthorEmailRegex</a></code> | <code>*string</code> | All commit author emails must match this regex, e.g. `@my-company.com$`. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules.property.branchNameRegex">BranchNameRegex</a></code> | <code>*string</code> | All branch names must match this regex, e.g. `(feature\|hotfix)\/*`. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules.property.commitCommitterCheck">CommitCommitterCheck</a></code> | <code>interface{}</code> | Only commits pushed using verified emails are allowed. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules.property.commitCommitterNameCheck">CommitCommitterNameCheck</a></code> | <code>interface{}</code> | Users can only push commits to this repository if the commit author name is consistent with their GitLab account name. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules.property.commitMessageNegativeRegex">CommitMessageNegativeRegex</a></code> | <code>*string</code> | No commit message is allowed to match this regex, for example `ssh\:\/\/`. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules.property.commitMessageRegex">CommitMessageRegex</a></code> | <code>*string</code> | All commit messages must match this regex, e.g. `Fixed \d+\..*`. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules.property.denyDeleteTag">DenyDeleteTag</a></code> | <code>interface{}</code> | Deny deleting a tag. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules.property.fileNameRegex">FileNameRegex</a></code> | <code>*string</code> | Filenames matching the regular expression provided in this attribute are not allowed, for example, `(jar\|exe)$`. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules.property.maxFileSize">MaxFileSize</a></code> | <code>*f64</code> | Maximum file size (MB) allowed. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules.property.memberCheck">MemberCheck</a></code> | <code>interface{}</code> | Allows only GitLab users to author commits. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules.property.preventSecrets">PreventSecrets</a></code> | <code>interface{}</code> | GitLab will reject any files that are likely to contain secrets. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules.property.rejectNonDcoCommits">RejectNonDcoCommits</a></code> | <code>interface{}</code> | Reject commit when it’s not DCO certified. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules.property.rejectUnsignedCommits">RejectUnsignedCommits</a></code> | <code>interface{}</code> | Only commits signed through GPG are allowed.  **Note** This attribute is only supported in GitLab versions >= 16.4. |

---

##### `AuthorEmailRegex`<sup>Optional</sup> <a name="AuthorEmailRegex" id="@cdktf/provider-gitlab.group.GroupPushRules.property.authorEmailRegex"></a>

```go
AuthorEmailRegex *string
```

- *Type:* *string

All commit author emails must match this regex, e.g. `@my-company.com$`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/group#author_email_regex Group#author_email_regex}

---

##### `BranchNameRegex`<sup>Optional</sup> <a name="BranchNameRegex" id="@cdktf/provider-gitlab.group.GroupPushRules.property.branchNameRegex"></a>

```go
BranchNameRegex *string
```

- *Type:* *string

All branch names must match this regex, e.g. `(feature|hotfix)\/*`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/group#branch_name_regex Group#branch_name_regex}

---

##### `CommitCommitterCheck`<sup>Optional</sup> <a name="CommitCommitterCheck" id="@cdktf/provider-gitlab.group.GroupPushRules.property.commitCommitterCheck"></a>

```go
CommitCommitterCheck interface{}
```

- *Type:* interface{}

Only commits pushed using verified emails are allowed.

**Note** This attribute is only supported in GitLab versions >= 16.4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/group#commit_committer_check Group#commit_committer_check}

---

##### `CommitCommitterNameCheck`<sup>Optional</sup> <a name="CommitCommitterNameCheck" id="@cdktf/provider-gitlab.group.GroupPushRules.property.commitCommitterNameCheck"></a>

```go
CommitCommitterNameCheck interface{}
```

- *Type:* interface{}

Users can only push commits to this repository if the commit author name is consistent with their GitLab account name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/group#commit_committer_name_check Group#commit_committer_name_check}

---

##### `CommitMessageNegativeRegex`<sup>Optional</sup> <a name="CommitMessageNegativeRegex" id="@cdktf/provider-gitlab.group.GroupPushRules.property.commitMessageNegativeRegex"></a>

```go
CommitMessageNegativeRegex *string
```

- *Type:* *string

No commit message is allowed to match this regex, for example `ssh\:\/\/`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/group#commit_message_negative_regex Group#commit_message_negative_regex}

---

##### `CommitMessageRegex`<sup>Optional</sup> <a name="CommitMessageRegex" id="@cdktf/provider-gitlab.group.GroupPushRules.property.commitMessageRegex"></a>

```go
CommitMessageRegex *string
```

- *Type:* *string

All commit messages must match this regex, e.g. `Fixed \d+\..*`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/group#commit_message_regex Group#commit_message_regex}

---

##### `DenyDeleteTag`<sup>Optional</sup> <a name="DenyDeleteTag" id="@cdktf/provider-gitlab.group.GroupPushRules.property.denyDeleteTag"></a>

```go
DenyDeleteTag interface{}
```

- *Type:* interface{}

Deny deleting a tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/group#deny_delete_tag Group#deny_delete_tag}

---

##### `FileNameRegex`<sup>Optional</sup> <a name="FileNameRegex" id="@cdktf/provider-gitlab.group.GroupPushRules.property.fileNameRegex"></a>

```go
FileNameRegex *string
```

- *Type:* *string

Filenames matching the regular expression provided in this attribute are not allowed, for example, `(jar|exe)$`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/group#file_name_regex Group#file_name_regex}

---

##### `MaxFileSize`<sup>Optional</sup> <a name="MaxFileSize" id="@cdktf/provider-gitlab.group.GroupPushRules.property.maxFileSize"></a>

```go
MaxFileSize *f64
```

- *Type:* *f64

Maximum file size (MB) allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/group#max_file_size Group#max_file_size}

---

##### `MemberCheck`<sup>Optional</sup> <a name="MemberCheck" id="@cdktf/provider-gitlab.group.GroupPushRules.property.memberCheck"></a>

```go
MemberCheck interface{}
```

- *Type:* interface{}

Allows only GitLab users to author commits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/group#member_check Group#member_check}

---

##### `PreventSecrets`<sup>Optional</sup> <a name="PreventSecrets" id="@cdktf/provider-gitlab.group.GroupPushRules.property.preventSecrets"></a>

```go
PreventSecrets interface{}
```

- *Type:* interface{}

GitLab will reject any files that are likely to contain secrets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/group#prevent_secrets Group#prevent_secrets}

---

##### `RejectNonDcoCommits`<sup>Optional</sup> <a name="RejectNonDcoCommits" id="@cdktf/provider-gitlab.group.GroupPushRules.property.rejectNonDcoCommits"></a>

```go
RejectNonDcoCommits interface{}
```

- *Type:* interface{}

Reject commit when it’s not DCO certified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/group#reject_non_dco_commits Group#reject_non_dco_commits}

---

##### `RejectUnsignedCommits`<sup>Optional</sup> <a name="RejectUnsignedCommits" id="@cdktf/provider-gitlab.group.GroupPushRules.property.rejectUnsignedCommits"></a>

```go
RejectUnsignedCommits interface{}
```

- *Type:* interface{}

Only commits signed through GPG are allowed.  **Note** This attribute is only supported in GitLab versions >= 16.4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/group#reject_unsigned_commits Group#reject_unsigned_commits}

---

## Classes <a name="Classes" id="Classes"></a>

### GroupDefaultBranchProtectionDefaultsOutputReference <a name="GroupDefaultBranchProtectionDefaultsOutputReference" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/group"

group.NewGroupDefaultBranchProtectionDefaultsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroupDefaultBranchProtectionDefaultsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.resetAllowedToMerge">ResetAllowedToMerge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.resetAllowedToPush">ResetAllowedToPush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.resetAllowForcePush">ResetAllowForcePush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.resetDeveloperCanInitialPush">ResetDeveloperCanInitialPush</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedToMerge` <a name="ResetAllowedToMerge" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.resetAllowedToMerge"></a>

```go
func ResetAllowedToMerge()
```

##### `ResetAllowedToPush` <a name="ResetAllowedToPush" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.resetAllowedToPush"></a>

```go
func ResetAllowedToPush()
```

##### `ResetAllowForcePush` <a name="ResetAllowForcePush" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.resetAllowForcePush"></a>

```go
func ResetAllowForcePush()
```

##### `ResetDeveloperCanInitialPush` <a name="ResetDeveloperCanInitialPush" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.resetDeveloperCanInitialPush"></a>

```go
func ResetDeveloperCanInitialPush()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.allowedToMergeInput">AllowedToMergeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.allowedToPushInput">AllowedToPushInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.allowForcePushInput">AllowForcePushInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.developerCanInitialPushInput">DeveloperCanInitialPushInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.allowedToMerge">AllowedToMerge</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.allowedToPush">AllowedToPush</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.allowForcePush">AllowForcePush</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.developerCanInitialPush">DeveloperCanInitialPush</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults">GroupDefaultBranchProtectionDefaults</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedToMergeInput`<sup>Optional</sup> <a name="AllowedToMergeInput" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.allowedToMergeInput"></a>

```go
func AllowedToMergeInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedToPushInput`<sup>Optional</sup> <a name="AllowedToPushInput" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.allowedToPushInput"></a>

```go
func AllowedToPushInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowForcePushInput`<sup>Optional</sup> <a name="AllowForcePushInput" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.allowForcePushInput"></a>

```go
func AllowForcePushInput() interface{}
```

- *Type:* interface{}

---

##### `DeveloperCanInitialPushInput`<sup>Optional</sup> <a name="DeveloperCanInitialPushInput" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.developerCanInitialPushInput"></a>

```go
func DeveloperCanInitialPushInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedToMerge`<sup>Required</sup> <a name="AllowedToMerge" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.allowedToMerge"></a>

```go
func AllowedToMerge() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedToPush`<sup>Required</sup> <a name="AllowedToPush" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.allowedToPush"></a>

```go
func AllowedToPush() *[]*string
```

- *Type:* *[]*string

---

##### `AllowForcePush`<sup>Required</sup> <a name="AllowForcePush" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.allowForcePush"></a>

```go
func AllowForcePush() interface{}
```

- *Type:* interface{}

---

##### `DeveloperCanInitialPush`<sup>Required</sup> <a name="DeveloperCanInitialPush" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.developerCanInitialPush"></a>

```go
func DeveloperCanInitialPush() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.internalValue"></a>

```go
func InternalValue() GroupDefaultBranchProtectionDefaults
```

- *Type:* <a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults">GroupDefaultBranchProtectionDefaults</a>

---


### GroupPushRulesOutputReference <a name="GroupPushRulesOutputReference" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/group"

group.NewGroupPushRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroupPushRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetAuthorEmailRegex">ResetAuthorEmailRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetBranchNameRegex">ResetBranchNameRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetCommitCommitterCheck">ResetCommitCommitterCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetCommitCommitterNameCheck">ResetCommitCommitterNameCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetCommitMessageNegativeRegex">ResetCommitMessageNegativeRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetCommitMessageRegex">ResetCommitMessageRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetDenyDeleteTag">ResetDenyDeleteTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetFileNameRegex">ResetFileNameRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetMaxFileSize">ResetMaxFileSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetMemberCheck">ResetMemberCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetPreventSecrets">ResetPreventSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetRejectNonDcoCommits">ResetRejectNonDcoCommits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetRejectUnsignedCommits">ResetRejectUnsignedCommits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthorEmailRegex` <a name="ResetAuthorEmailRegex" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetAuthorEmailRegex"></a>

```go
func ResetAuthorEmailRegex()
```

##### `ResetBranchNameRegex` <a name="ResetBranchNameRegex" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetBranchNameRegex"></a>

```go
func ResetBranchNameRegex()
```

##### `ResetCommitCommitterCheck` <a name="ResetCommitCommitterCheck" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetCommitCommitterCheck"></a>

```go
func ResetCommitCommitterCheck()
```

##### `ResetCommitCommitterNameCheck` <a name="ResetCommitCommitterNameCheck" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetCommitCommitterNameCheck"></a>

```go
func ResetCommitCommitterNameCheck()
```

##### `ResetCommitMessageNegativeRegex` <a name="ResetCommitMessageNegativeRegex" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetCommitMessageNegativeRegex"></a>

```go
func ResetCommitMessageNegativeRegex()
```

##### `ResetCommitMessageRegex` <a name="ResetCommitMessageRegex" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetCommitMessageRegex"></a>

```go
func ResetCommitMessageRegex()
```

##### `ResetDenyDeleteTag` <a name="ResetDenyDeleteTag" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetDenyDeleteTag"></a>

```go
func ResetDenyDeleteTag()
```

##### `ResetFileNameRegex` <a name="ResetFileNameRegex" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetFileNameRegex"></a>

```go
func ResetFileNameRegex()
```

##### `ResetMaxFileSize` <a name="ResetMaxFileSize" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetMaxFileSize"></a>

```go
func ResetMaxFileSize()
```

##### `ResetMemberCheck` <a name="ResetMemberCheck" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetMemberCheck"></a>

```go
func ResetMemberCheck()
```

##### `ResetPreventSecrets` <a name="ResetPreventSecrets" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetPreventSecrets"></a>

```go
func ResetPreventSecrets()
```

##### `ResetRejectNonDcoCommits` <a name="ResetRejectNonDcoCommits" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetRejectNonDcoCommits"></a>

```go
func ResetRejectNonDcoCommits()
```

##### `ResetRejectUnsignedCommits` <a name="ResetRejectUnsignedCommits" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetRejectUnsignedCommits"></a>

```go
func ResetRejectUnsignedCommits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.authorEmailRegexInput">AuthorEmailRegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.branchNameRegexInput">BranchNameRegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitCommitterCheckInput">CommitCommitterCheckInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitCommitterNameCheckInput">CommitCommitterNameCheckInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitMessageNegativeRegexInput">CommitMessageNegativeRegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitMessageRegexInput">CommitMessageRegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.denyDeleteTagInput">DenyDeleteTagInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.fileNameRegexInput">FileNameRegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.maxFileSizeInput">MaxFileSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.memberCheckInput">MemberCheckInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.preventSecretsInput">PreventSecretsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.rejectNonDcoCommitsInput">RejectNonDcoCommitsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.rejectUnsignedCommitsInput">RejectUnsignedCommitsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.authorEmailRegex">AuthorEmailRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.branchNameRegex">BranchNameRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitCommitterCheck">CommitCommitterCheck</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitCommitterNameCheck">CommitCommitterNameCheck</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitMessageNegativeRegex">CommitMessageNegativeRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitMessageRegex">CommitMessageRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.denyDeleteTag">DenyDeleteTag</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.fileNameRegex">FileNameRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.maxFileSize">MaxFileSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.memberCheck">MemberCheck</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.preventSecrets">PreventSecrets</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.rejectNonDcoCommits">RejectNonDcoCommits</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.rejectUnsignedCommits">RejectUnsignedCommits</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules">GroupPushRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorEmailRegexInput`<sup>Optional</sup> <a name="AuthorEmailRegexInput" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.authorEmailRegexInput"></a>

```go
func AuthorEmailRegexInput() *string
```

- *Type:* *string

---

##### `BranchNameRegexInput`<sup>Optional</sup> <a name="BranchNameRegexInput" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.branchNameRegexInput"></a>

```go
func BranchNameRegexInput() *string
```

- *Type:* *string

---

##### `CommitCommitterCheckInput`<sup>Optional</sup> <a name="CommitCommitterCheckInput" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitCommitterCheckInput"></a>

```go
func CommitCommitterCheckInput() interface{}
```

- *Type:* interface{}

---

##### `CommitCommitterNameCheckInput`<sup>Optional</sup> <a name="CommitCommitterNameCheckInput" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitCommitterNameCheckInput"></a>

```go
func CommitCommitterNameCheckInput() interface{}
```

- *Type:* interface{}

---

##### `CommitMessageNegativeRegexInput`<sup>Optional</sup> <a name="CommitMessageNegativeRegexInput" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitMessageNegativeRegexInput"></a>

```go
func CommitMessageNegativeRegexInput() *string
```

- *Type:* *string

---

##### `CommitMessageRegexInput`<sup>Optional</sup> <a name="CommitMessageRegexInput" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitMessageRegexInput"></a>

```go
func CommitMessageRegexInput() *string
```

- *Type:* *string

---

##### `DenyDeleteTagInput`<sup>Optional</sup> <a name="DenyDeleteTagInput" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.denyDeleteTagInput"></a>

```go
func DenyDeleteTagInput() interface{}
```

- *Type:* interface{}

---

##### `FileNameRegexInput`<sup>Optional</sup> <a name="FileNameRegexInput" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.fileNameRegexInput"></a>

```go
func FileNameRegexInput() *string
```

- *Type:* *string

---

##### `MaxFileSizeInput`<sup>Optional</sup> <a name="MaxFileSizeInput" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.maxFileSizeInput"></a>

```go
func MaxFileSizeInput() *f64
```

- *Type:* *f64

---

##### `MemberCheckInput`<sup>Optional</sup> <a name="MemberCheckInput" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.memberCheckInput"></a>

```go
func MemberCheckInput() interface{}
```

- *Type:* interface{}

---

##### `PreventSecretsInput`<sup>Optional</sup> <a name="PreventSecretsInput" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.preventSecretsInput"></a>

```go
func PreventSecretsInput() interface{}
```

- *Type:* interface{}

---

##### `RejectNonDcoCommitsInput`<sup>Optional</sup> <a name="RejectNonDcoCommitsInput" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.rejectNonDcoCommitsInput"></a>

```go
func RejectNonDcoCommitsInput() interface{}
```

- *Type:* interface{}

---

##### `RejectUnsignedCommitsInput`<sup>Optional</sup> <a name="RejectUnsignedCommitsInput" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.rejectUnsignedCommitsInput"></a>

```go
func RejectUnsignedCommitsInput() interface{}
```

- *Type:* interface{}

---

##### `AuthorEmailRegex`<sup>Required</sup> <a name="AuthorEmailRegex" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.authorEmailRegex"></a>

```go
func AuthorEmailRegex() *string
```

- *Type:* *string

---

##### `BranchNameRegex`<sup>Required</sup> <a name="BranchNameRegex" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.branchNameRegex"></a>

```go
func BranchNameRegex() *string
```

- *Type:* *string

---

##### `CommitCommitterCheck`<sup>Required</sup> <a name="CommitCommitterCheck" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitCommitterCheck"></a>

```go
func CommitCommitterCheck() interface{}
```

- *Type:* interface{}

---

##### `CommitCommitterNameCheck`<sup>Required</sup> <a name="CommitCommitterNameCheck" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitCommitterNameCheck"></a>

```go
func CommitCommitterNameCheck() interface{}
```

- *Type:* interface{}

---

##### `CommitMessageNegativeRegex`<sup>Required</sup> <a name="CommitMessageNegativeRegex" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitMessageNegativeRegex"></a>

```go
func CommitMessageNegativeRegex() *string
```

- *Type:* *string

---

##### `CommitMessageRegex`<sup>Required</sup> <a name="CommitMessageRegex" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitMessageRegex"></a>

```go
func CommitMessageRegex() *string
```

- *Type:* *string

---

##### `DenyDeleteTag`<sup>Required</sup> <a name="DenyDeleteTag" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.denyDeleteTag"></a>

```go
func DenyDeleteTag() interface{}
```

- *Type:* interface{}

---

##### `FileNameRegex`<sup>Required</sup> <a name="FileNameRegex" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.fileNameRegex"></a>

```go
func FileNameRegex() *string
```

- *Type:* *string

---

##### `MaxFileSize`<sup>Required</sup> <a name="MaxFileSize" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.maxFileSize"></a>

```go
func MaxFileSize() *f64
```

- *Type:* *f64

---

##### `MemberCheck`<sup>Required</sup> <a name="MemberCheck" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.memberCheck"></a>

```go
func MemberCheck() interface{}
```

- *Type:* interface{}

---

##### `PreventSecrets`<sup>Required</sup> <a name="PreventSecrets" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.preventSecrets"></a>

```go
func PreventSecrets() interface{}
```

- *Type:* interface{}

---

##### `RejectNonDcoCommits`<sup>Required</sup> <a name="RejectNonDcoCommits" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.rejectNonDcoCommits"></a>

```go
func RejectNonDcoCommits() interface{}
```

- *Type:* interface{}

---

##### `RejectUnsignedCommits`<sup>Required</sup> <a name="RejectUnsignedCommits" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.rejectUnsignedCommits"></a>

```go
func RejectUnsignedCommits() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() GroupPushRules
```

- *Type:* <a href="#@cdktf/provider-gitlab.group.GroupPushRules">GroupPushRules</a>

---



