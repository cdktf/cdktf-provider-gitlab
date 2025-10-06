# `group` Submodule <a name="`group` Submodule" id="@cdktf/provider-gitlab.group"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Group <a name="Group" id="@cdktf/provider-gitlab.group.Group"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group gitlab_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.group.Group.Initializer"></a>

```typescript
import { group } from '@cdktf/provider-gitlab'

new group.Group(scope: Construct, id: string, config: GroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.group.GroupConfig">GroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.group.Group.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.group.GroupConfig">GroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.Group.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.group.Group.putDefaultBranchProtectionDefaults">putDefaultBranchProtectionDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.putPushRules">putPushRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetAllowedEmailDomainsList">resetAllowedEmailDomainsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetAutoDevopsEnabled">resetAutoDevopsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetAvatar">resetAvatar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetAvatarHash">resetAvatarHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetDefaultBranch">resetDefaultBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetDefaultBranchProtection">resetDefaultBranchProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetDefaultBranchProtectionDefaults">resetDefaultBranchProtectionDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetEmailsEnabled">resetEmailsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetExtraSharedRunnersMinutesLimit">resetExtraSharedRunnersMinutesLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetIpRestrictionRanges">resetIpRestrictionRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetLfsEnabled">resetLfsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetMembershipLock">resetMembershipLock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetMentionsDisabled">resetMentionsDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetParentId">resetParentId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetPermanentlyRemoveOnDelete">resetPermanentlyRemoveOnDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetPreventForkingOutsideGroup">resetPreventForkingOutsideGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetProjectCreationLevel">resetProjectCreationLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetPushRules">resetPushRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetRequestAccessEnabled">resetRequestAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetRequireTwoFactorAuthentication">resetRequireTwoFactorAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetSharedRunnersMinutesLimit">resetSharedRunnersMinutesLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetSharedRunnersSetting">resetSharedRunnersSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetShareWithGroupLock">resetShareWithGroupLock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetSubgroupCreationLevel">resetSubgroupCreationLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetTwoFactorGracePeriod">resetTwoFactorGracePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetVisibilityLevel">resetVisibilityLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.resetWikiAccessLevel">resetWikiAccessLevel</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.group.Group.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.group.Group.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.group.Group.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.group.Group.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.group.Group.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.group.Group.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.group.Group.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.group.Group.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.group.Group.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.group.Group.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.group.Group.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.group.Group.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.group.Group.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.Group.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.group.Group.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.Group.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.group.Group.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.Group.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.group.Group.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.Group.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.group.Group.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.Group.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.group.Group.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.Group.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.group.Group.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.Group.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.group.Group.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.Group.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.group.Group.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.Group.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-gitlab.group.Group.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.group.Group.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.group.Group.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.group.Group.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.group.Group.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.Group.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-gitlab.group.Group.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.group.Group.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.group.Group.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.group.Group.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.group.Group.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-gitlab.group.Group.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.group.Group.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDefaultBranchProtectionDefaults` <a name="putDefaultBranchProtectionDefaults" id="@cdktf/provider-gitlab.group.Group.putDefaultBranchProtectionDefaults"></a>

```typescript
public putDefaultBranchProtectionDefaults(value: GroupDefaultBranchProtectionDefaults): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.group.Group.putDefaultBranchProtectionDefaults.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults">GroupDefaultBranchProtectionDefaults</a>

---

##### `putPushRules` <a name="putPushRules" id="@cdktf/provider-gitlab.group.Group.putPushRules"></a>

```typescript
public putPushRules(value: GroupPushRules): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.group.Group.putPushRules.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.group.GroupPushRules">GroupPushRules</a>

---

##### `resetAllowedEmailDomainsList` <a name="resetAllowedEmailDomainsList" id="@cdktf/provider-gitlab.group.Group.resetAllowedEmailDomainsList"></a>

```typescript
public resetAllowedEmailDomainsList(): void
```

##### `resetAutoDevopsEnabled` <a name="resetAutoDevopsEnabled" id="@cdktf/provider-gitlab.group.Group.resetAutoDevopsEnabled"></a>

```typescript
public resetAutoDevopsEnabled(): void
```

##### `resetAvatar` <a name="resetAvatar" id="@cdktf/provider-gitlab.group.Group.resetAvatar"></a>

```typescript
public resetAvatar(): void
```

##### `resetAvatarHash` <a name="resetAvatarHash" id="@cdktf/provider-gitlab.group.Group.resetAvatarHash"></a>

```typescript
public resetAvatarHash(): void
```

##### `resetDefaultBranch` <a name="resetDefaultBranch" id="@cdktf/provider-gitlab.group.Group.resetDefaultBranch"></a>

```typescript
public resetDefaultBranch(): void
```

##### `resetDefaultBranchProtection` <a name="resetDefaultBranchProtection" id="@cdktf/provider-gitlab.group.Group.resetDefaultBranchProtection"></a>

```typescript
public resetDefaultBranchProtection(): void
```

##### `resetDefaultBranchProtectionDefaults` <a name="resetDefaultBranchProtectionDefaults" id="@cdktf/provider-gitlab.group.Group.resetDefaultBranchProtectionDefaults"></a>

```typescript
public resetDefaultBranchProtectionDefaults(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-gitlab.group.Group.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEmailsEnabled` <a name="resetEmailsEnabled" id="@cdktf/provider-gitlab.group.Group.resetEmailsEnabled"></a>

```typescript
public resetEmailsEnabled(): void
```

##### `resetExtraSharedRunnersMinutesLimit` <a name="resetExtraSharedRunnersMinutesLimit" id="@cdktf/provider-gitlab.group.Group.resetExtraSharedRunnersMinutesLimit"></a>

```typescript
public resetExtraSharedRunnersMinutesLimit(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-gitlab.group.Group.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpRestrictionRanges` <a name="resetIpRestrictionRanges" id="@cdktf/provider-gitlab.group.Group.resetIpRestrictionRanges"></a>

```typescript
public resetIpRestrictionRanges(): void
```

##### `resetLfsEnabled` <a name="resetLfsEnabled" id="@cdktf/provider-gitlab.group.Group.resetLfsEnabled"></a>

```typescript
public resetLfsEnabled(): void
```

##### `resetMembershipLock` <a name="resetMembershipLock" id="@cdktf/provider-gitlab.group.Group.resetMembershipLock"></a>

```typescript
public resetMembershipLock(): void
```

##### `resetMentionsDisabled` <a name="resetMentionsDisabled" id="@cdktf/provider-gitlab.group.Group.resetMentionsDisabled"></a>

```typescript
public resetMentionsDisabled(): void
```

##### `resetParentId` <a name="resetParentId" id="@cdktf/provider-gitlab.group.Group.resetParentId"></a>

```typescript
public resetParentId(): void
```

##### `resetPermanentlyRemoveOnDelete` <a name="resetPermanentlyRemoveOnDelete" id="@cdktf/provider-gitlab.group.Group.resetPermanentlyRemoveOnDelete"></a>

```typescript
public resetPermanentlyRemoveOnDelete(): void
```

##### `resetPreventForkingOutsideGroup` <a name="resetPreventForkingOutsideGroup" id="@cdktf/provider-gitlab.group.Group.resetPreventForkingOutsideGroup"></a>

```typescript
public resetPreventForkingOutsideGroup(): void
```

##### `resetProjectCreationLevel` <a name="resetProjectCreationLevel" id="@cdktf/provider-gitlab.group.Group.resetProjectCreationLevel"></a>

```typescript
public resetProjectCreationLevel(): void
```

##### `resetPushRules` <a name="resetPushRules" id="@cdktf/provider-gitlab.group.Group.resetPushRules"></a>

```typescript
public resetPushRules(): void
```

##### `resetRequestAccessEnabled` <a name="resetRequestAccessEnabled" id="@cdktf/provider-gitlab.group.Group.resetRequestAccessEnabled"></a>

```typescript
public resetRequestAccessEnabled(): void
```

##### `resetRequireTwoFactorAuthentication` <a name="resetRequireTwoFactorAuthentication" id="@cdktf/provider-gitlab.group.Group.resetRequireTwoFactorAuthentication"></a>

```typescript
public resetRequireTwoFactorAuthentication(): void
```

##### `resetSharedRunnersMinutesLimit` <a name="resetSharedRunnersMinutesLimit" id="@cdktf/provider-gitlab.group.Group.resetSharedRunnersMinutesLimit"></a>

```typescript
public resetSharedRunnersMinutesLimit(): void
```

##### `resetSharedRunnersSetting` <a name="resetSharedRunnersSetting" id="@cdktf/provider-gitlab.group.Group.resetSharedRunnersSetting"></a>

```typescript
public resetSharedRunnersSetting(): void
```

##### `resetShareWithGroupLock` <a name="resetShareWithGroupLock" id="@cdktf/provider-gitlab.group.Group.resetShareWithGroupLock"></a>

```typescript
public resetShareWithGroupLock(): void
```

##### `resetSubgroupCreationLevel` <a name="resetSubgroupCreationLevel" id="@cdktf/provider-gitlab.group.Group.resetSubgroupCreationLevel"></a>

```typescript
public resetSubgroupCreationLevel(): void
```

##### `resetTwoFactorGracePeriod` <a name="resetTwoFactorGracePeriod" id="@cdktf/provider-gitlab.group.Group.resetTwoFactorGracePeriod"></a>

```typescript
public resetTwoFactorGracePeriod(): void
```

##### `resetVisibilityLevel` <a name="resetVisibilityLevel" id="@cdktf/provider-gitlab.group.Group.resetVisibilityLevel"></a>

```typescript
public resetVisibilityLevel(): void
```

##### `resetWikiAccessLevel` <a name="resetWikiAccessLevel" id="@cdktf/provider-gitlab.group.Group.resetWikiAccessLevel"></a>

```typescript
public resetWikiAccessLevel(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.Group.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Group resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.group.Group.isConstruct"></a>

```typescript
import { group } from '@cdktf/provider-gitlab'

group.Group.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.group.Group.isTerraformElement"></a>

```typescript
import { group } from '@cdktf/provider-gitlab'

group.Group.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.group.Group.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.group.Group.isTerraformResource"></a>

```typescript
import { group } from '@cdktf/provider-gitlab'

group.Group.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.group.Group.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.group.Group.generateConfigForImport"></a>

```typescript
import { group } from '@cdktf/provider-gitlab'

group.Group.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Group resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.group.Group.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.group.Group.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Group to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.group.Group.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Group that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.group.Group.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Group to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.avatarUrl">avatarUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.defaultBranchProtectionDefaults">defaultBranchProtectionDefaults</a></code> | <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference">GroupDefaultBranchProtectionDefaultsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.fullName">fullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.fullPath">fullPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.pushRules">pushRules</a></code> | <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference">GroupPushRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.runnersToken">runnersToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.webUrl">webUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.allowedEmailDomainsListInput">allowedEmailDomainsListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.autoDevopsEnabledInput">autoDevopsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.avatarHashInput">avatarHashInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.avatarInput">avatarInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.defaultBranchInput">defaultBranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.defaultBranchProtectionDefaultsInput">defaultBranchProtectionDefaultsInput</a></code> | <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults">GroupDefaultBranchProtectionDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.defaultBranchProtectionInput">defaultBranchProtectionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.emailsEnabledInput">emailsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.extraSharedRunnersMinutesLimitInput">extraSharedRunnersMinutesLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.ipRestrictionRangesInput">ipRestrictionRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.lfsEnabledInput">lfsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.membershipLockInput">membershipLockInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.mentionsDisabledInput">mentionsDisabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.parentIdInput">parentIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.permanentlyRemoveOnDeleteInput">permanentlyRemoveOnDeleteInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.preventForkingOutsideGroupInput">preventForkingOutsideGroupInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.projectCreationLevelInput">projectCreationLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.pushRulesInput">pushRulesInput</a></code> | <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules">GroupPushRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.requestAccessEnabledInput">requestAccessEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.requireTwoFactorAuthenticationInput">requireTwoFactorAuthenticationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.sharedRunnersMinutesLimitInput">sharedRunnersMinutesLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.sharedRunnersSettingInput">sharedRunnersSettingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.shareWithGroupLockInput">shareWithGroupLockInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.subgroupCreationLevelInput">subgroupCreationLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.twoFactorGracePeriodInput">twoFactorGracePeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.visibilityLevelInput">visibilityLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.wikiAccessLevelInput">wikiAccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.allowedEmailDomainsList">allowedEmailDomainsList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.autoDevopsEnabled">autoDevopsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.avatar">avatar</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.avatarHash">avatarHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.defaultBranch">defaultBranch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.defaultBranchProtection">defaultBranchProtection</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.emailsEnabled">emailsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.extraSharedRunnersMinutesLimit">extraSharedRunnersMinutesLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.ipRestrictionRanges">ipRestrictionRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.lfsEnabled">lfsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.membershipLock">membershipLock</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.mentionsDisabled">mentionsDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.parentId">parentId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.permanentlyRemoveOnDelete">permanentlyRemoveOnDelete</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.preventForkingOutsideGroup">preventForkingOutsideGroup</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.projectCreationLevel">projectCreationLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.requestAccessEnabled">requestAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.requireTwoFactorAuthentication">requireTwoFactorAuthentication</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.sharedRunnersMinutesLimit">sharedRunnersMinutesLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.sharedRunnersSetting">sharedRunnersSetting</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.shareWithGroupLock">shareWithGroupLock</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.subgroupCreationLevel">subgroupCreationLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.twoFactorGracePeriod">twoFactorGracePeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.visibilityLevel">visibilityLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.wikiAccessLevel">wikiAccessLevel</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.group.Group.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.group.Group.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.group.Group.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.group.Group.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.group.Group.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.group.Group.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.group.Group.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.group.Group.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.group.Group.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.group.Group.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.group.Group.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.group.Group.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.group.Group.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.group.Group.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `avatarUrl`<sup>Required</sup> <a name="avatarUrl" id="@cdktf/provider-gitlab.group.Group.property.avatarUrl"></a>

```typescript
public readonly avatarUrl: string;
```

- *Type:* string

---

##### `defaultBranchProtectionDefaults`<sup>Required</sup> <a name="defaultBranchProtectionDefaults" id="@cdktf/provider-gitlab.group.Group.property.defaultBranchProtectionDefaults"></a>

```typescript
public readonly defaultBranchProtectionDefaults: GroupDefaultBranchProtectionDefaultsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference">GroupDefaultBranchProtectionDefaultsOutputReference</a>

---

##### `fullName`<sup>Required</sup> <a name="fullName" id="@cdktf/provider-gitlab.group.Group.property.fullName"></a>

```typescript
public readonly fullName: string;
```

- *Type:* string

---

##### `fullPath`<sup>Required</sup> <a name="fullPath" id="@cdktf/provider-gitlab.group.Group.property.fullPath"></a>

```typescript
public readonly fullPath: string;
```

- *Type:* string

---

##### `pushRules`<sup>Required</sup> <a name="pushRules" id="@cdktf/provider-gitlab.group.Group.property.pushRules"></a>

```typescript
public readonly pushRules: GroupPushRulesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference">GroupPushRulesOutputReference</a>

---

##### `runnersToken`<sup>Required</sup> <a name="runnersToken" id="@cdktf/provider-gitlab.group.Group.property.runnersToken"></a>

```typescript
public readonly runnersToken: string;
```

- *Type:* string

---

##### `webUrl`<sup>Required</sup> <a name="webUrl" id="@cdktf/provider-gitlab.group.Group.property.webUrl"></a>

```typescript
public readonly webUrl: string;
```

- *Type:* string

---

##### `allowedEmailDomainsListInput`<sup>Optional</sup> <a name="allowedEmailDomainsListInput" id="@cdktf/provider-gitlab.group.Group.property.allowedEmailDomainsListInput"></a>

```typescript
public readonly allowedEmailDomainsListInput: string[];
```

- *Type:* string[]

---

##### `autoDevopsEnabledInput`<sup>Optional</sup> <a name="autoDevopsEnabledInput" id="@cdktf/provider-gitlab.group.Group.property.autoDevopsEnabledInput"></a>

```typescript
public readonly autoDevopsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `avatarHashInput`<sup>Optional</sup> <a name="avatarHashInput" id="@cdktf/provider-gitlab.group.Group.property.avatarHashInput"></a>

```typescript
public readonly avatarHashInput: string;
```

- *Type:* string

---

##### `avatarInput`<sup>Optional</sup> <a name="avatarInput" id="@cdktf/provider-gitlab.group.Group.property.avatarInput"></a>

```typescript
public readonly avatarInput: string;
```

- *Type:* string

---

##### `defaultBranchInput`<sup>Optional</sup> <a name="defaultBranchInput" id="@cdktf/provider-gitlab.group.Group.property.defaultBranchInput"></a>

```typescript
public readonly defaultBranchInput: string;
```

- *Type:* string

---

##### `defaultBranchProtectionDefaultsInput`<sup>Optional</sup> <a name="defaultBranchProtectionDefaultsInput" id="@cdktf/provider-gitlab.group.Group.property.defaultBranchProtectionDefaultsInput"></a>

```typescript
public readonly defaultBranchProtectionDefaultsInput: GroupDefaultBranchProtectionDefaults;
```

- *Type:* <a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults">GroupDefaultBranchProtectionDefaults</a>

---

##### `defaultBranchProtectionInput`<sup>Optional</sup> <a name="defaultBranchProtectionInput" id="@cdktf/provider-gitlab.group.Group.property.defaultBranchProtectionInput"></a>

```typescript
public readonly defaultBranchProtectionInput: number;
```

- *Type:* number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-gitlab.group.Group.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `emailsEnabledInput`<sup>Optional</sup> <a name="emailsEnabledInput" id="@cdktf/provider-gitlab.group.Group.property.emailsEnabledInput"></a>

```typescript
public readonly emailsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `extraSharedRunnersMinutesLimitInput`<sup>Optional</sup> <a name="extraSharedRunnersMinutesLimitInput" id="@cdktf/provider-gitlab.group.Group.property.extraSharedRunnersMinutesLimitInput"></a>

```typescript
public readonly extraSharedRunnersMinutesLimitInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-gitlab.group.Group.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipRestrictionRangesInput`<sup>Optional</sup> <a name="ipRestrictionRangesInput" id="@cdktf/provider-gitlab.group.Group.property.ipRestrictionRangesInput"></a>

```typescript
public readonly ipRestrictionRangesInput: string[];
```

- *Type:* string[]

---

##### `lfsEnabledInput`<sup>Optional</sup> <a name="lfsEnabledInput" id="@cdktf/provider-gitlab.group.Group.property.lfsEnabledInput"></a>

```typescript
public readonly lfsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `membershipLockInput`<sup>Optional</sup> <a name="membershipLockInput" id="@cdktf/provider-gitlab.group.Group.property.membershipLockInput"></a>

```typescript
public readonly membershipLockInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mentionsDisabledInput`<sup>Optional</sup> <a name="mentionsDisabledInput" id="@cdktf/provider-gitlab.group.Group.property.mentionsDisabledInput"></a>

```typescript
public readonly mentionsDisabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-gitlab.group.Group.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parentIdInput`<sup>Optional</sup> <a name="parentIdInput" id="@cdktf/provider-gitlab.group.Group.property.parentIdInput"></a>

```typescript
public readonly parentIdInput: number;
```

- *Type:* number

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-gitlab.group.Group.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `permanentlyRemoveOnDeleteInput`<sup>Optional</sup> <a name="permanentlyRemoveOnDeleteInput" id="@cdktf/provider-gitlab.group.Group.property.permanentlyRemoveOnDeleteInput"></a>

```typescript
public readonly permanentlyRemoveOnDeleteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `preventForkingOutsideGroupInput`<sup>Optional</sup> <a name="preventForkingOutsideGroupInput" id="@cdktf/provider-gitlab.group.Group.property.preventForkingOutsideGroupInput"></a>

```typescript
public readonly preventForkingOutsideGroupInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `projectCreationLevelInput`<sup>Optional</sup> <a name="projectCreationLevelInput" id="@cdktf/provider-gitlab.group.Group.property.projectCreationLevelInput"></a>

```typescript
public readonly projectCreationLevelInput: string;
```

- *Type:* string

---

##### `pushRulesInput`<sup>Optional</sup> <a name="pushRulesInput" id="@cdktf/provider-gitlab.group.Group.property.pushRulesInput"></a>

```typescript
public readonly pushRulesInput: GroupPushRules;
```

- *Type:* <a href="#@cdktf/provider-gitlab.group.GroupPushRules">GroupPushRules</a>

---

##### `requestAccessEnabledInput`<sup>Optional</sup> <a name="requestAccessEnabledInput" id="@cdktf/provider-gitlab.group.Group.property.requestAccessEnabledInput"></a>

```typescript
public readonly requestAccessEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requireTwoFactorAuthenticationInput`<sup>Optional</sup> <a name="requireTwoFactorAuthenticationInput" id="@cdktf/provider-gitlab.group.Group.property.requireTwoFactorAuthenticationInput"></a>

```typescript
public readonly requireTwoFactorAuthenticationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sharedRunnersMinutesLimitInput`<sup>Optional</sup> <a name="sharedRunnersMinutesLimitInput" id="@cdktf/provider-gitlab.group.Group.property.sharedRunnersMinutesLimitInput"></a>

```typescript
public readonly sharedRunnersMinutesLimitInput: number;
```

- *Type:* number

---

##### `sharedRunnersSettingInput`<sup>Optional</sup> <a name="sharedRunnersSettingInput" id="@cdktf/provider-gitlab.group.Group.property.sharedRunnersSettingInput"></a>

```typescript
public readonly sharedRunnersSettingInput: string;
```

- *Type:* string

---

##### `shareWithGroupLockInput`<sup>Optional</sup> <a name="shareWithGroupLockInput" id="@cdktf/provider-gitlab.group.Group.property.shareWithGroupLockInput"></a>

```typescript
public readonly shareWithGroupLockInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `subgroupCreationLevelInput`<sup>Optional</sup> <a name="subgroupCreationLevelInput" id="@cdktf/provider-gitlab.group.Group.property.subgroupCreationLevelInput"></a>

```typescript
public readonly subgroupCreationLevelInput: string;
```

- *Type:* string

---

##### `twoFactorGracePeriodInput`<sup>Optional</sup> <a name="twoFactorGracePeriodInput" id="@cdktf/provider-gitlab.group.Group.property.twoFactorGracePeriodInput"></a>

```typescript
public readonly twoFactorGracePeriodInput: number;
```

- *Type:* number

---

##### `visibilityLevelInput`<sup>Optional</sup> <a name="visibilityLevelInput" id="@cdktf/provider-gitlab.group.Group.property.visibilityLevelInput"></a>

```typescript
public readonly visibilityLevelInput: string;
```

- *Type:* string

---

##### `wikiAccessLevelInput`<sup>Optional</sup> <a name="wikiAccessLevelInput" id="@cdktf/provider-gitlab.group.Group.property.wikiAccessLevelInput"></a>

```typescript
public readonly wikiAccessLevelInput: string;
```

- *Type:* string

---

##### `allowedEmailDomainsList`<sup>Required</sup> <a name="allowedEmailDomainsList" id="@cdktf/provider-gitlab.group.Group.property.allowedEmailDomainsList"></a>

```typescript
public readonly allowedEmailDomainsList: string[];
```

- *Type:* string[]

---

##### `autoDevopsEnabled`<sup>Required</sup> <a name="autoDevopsEnabled" id="@cdktf/provider-gitlab.group.Group.property.autoDevopsEnabled"></a>

```typescript
public readonly autoDevopsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `avatar`<sup>Required</sup> <a name="avatar" id="@cdktf/provider-gitlab.group.Group.property.avatar"></a>

```typescript
public readonly avatar: string;
```

- *Type:* string

---

##### `avatarHash`<sup>Required</sup> <a name="avatarHash" id="@cdktf/provider-gitlab.group.Group.property.avatarHash"></a>

```typescript
public readonly avatarHash: string;
```

- *Type:* string

---

##### `defaultBranch`<sup>Required</sup> <a name="defaultBranch" id="@cdktf/provider-gitlab.group.Group.property.defaultBranch"></a>

```typescript
public readonly defaultBranch: string;
```

- *Type:* string

---

##### `defaultBranchProtection`<sup>Required</sup> <a name="defaultBranchProtection" id="@cdktf/provider-gitlab.group.Group.property.defaultBranchProtection"></a>

```typescript
public readonly defaultBranchProtection: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-gitlab.group.Group.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `emailsEnabled`<sup>Required</sup> <a name="emailsEnabled" id="@cdktf/provider-gitlab.group.Group.property.emailsEnabled"></a>

```typescript
public readonly emailsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `extraSharedRunnersMinutesLimit`<sup>Required</sup> <a name="extraSharedRunnersMinutesLimit" id="@cdktf/provider-gitlab.group.Group.property.extraSharedRunnersMinutesLimit"></a>

```typescript
public readonly extraSharedRunnersMinutesLimit: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.group.Group.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipRestrictionRanges`<sup>Required</sup> <a name="ipRestrictionRanges" id="@cdktf/provider-gitlab.group.Group.property.ipRestrictionRanges"></a>

```typescript
public readonly ipRestrictionRanges: string[];
```

- *Type:* string[]

---

##### `lfsEnabled`<sup>Required</sup> <a name="lfsEnabled" id="@cdktf/provider-gitlab.group.Group.property.lfsEnabled"></a>

```typescript
public readonly lfsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `membershipLock`<sup>Required</sup> <a name="membershipLock" id="@cdktf/provider-gitlab.group.Group.property.membershipLock"></a>

```typescript
public readonly membershipLock: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mentionsDisabled`<sup>Required</sup> <a name="mentionsDisabled" id="@cdktf/provider-gitlab.group.Group.property.mentionsDisabled"></a>

```typescript
public readonly mentionsDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.group.Group.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parentId`<sup>Required</sup> <a name="parentId" id="@cdktf/provider-gitlab.group.Group.property.parentId"></a>

```typescript
public readonly parentId: number;
```

- *Type:* number

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.group.Group.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `permanentlyRemoveOnDelete`<sup>Required</sup> <a name="permanentlyRemoveOnDelete" id="@cdktf/provider-gitlab.group.Group.property.permanentlyRemoveOnDelete"></a>

```typescript
public readonly permanentlyRemoveOnDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `preventForkingOutsideGroup`<sup>Required</sup> <a name="preventForkingOutsideGroup" id="@cdktf/provider-gitlab.group.Group.property.preventForkingOutsideGroup"></a>

```typescript
public readonly preventForkingOutsideGroup: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `projectCreationLevel`<sup>Required</sup> <a name="projectCreationLevel" id="@cdktf/provider-gitlab.group.Group.property.projectCreationLevel"></a>

```typescript
public readonly projectCreationLevel: string;
```

- *Type:* string

---

##### `requestAccessEnabled`<sup>Required</sup> <a name="requestAccessEnabled" id="@cdktf/provider-gitlab.group.Group.property.requestAccessEnabled"></a>

```typescript
public readonly requestAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requireTwoFactorAuthentication`<sup>Required</sup> <a name="requireTwoFactorAuthentication" id="@cdktf/provider-gitlab.group.Group.property.requireTwoFactorAuthentication"></a>

```typescript
public readonly requireTwoFactorAuthentication: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sharedRunnersMinutesLimit`<sup>Required</sup> <a name="sharedRunnersMinutesLimit" id="@cdktf/provider-gitlab.group.Group.property.sharedRunnersMinutesLimit"></a>

```typescript
public readonly sharedRunnersMinutesLimit: number;
```

- *Type:* number

---

##### `sharedRunnersSetting`<sup>Required</sup> <a name="sharedRunnersSetting" id="@cdktf/provider-gitlab.group.Group.property.sharedRunnersSetting"></a>

```typescript
public readonly sharedRunnersSetting: string;
```

- *Type:* string

---

##### `shareWithGroupLock`<sup>Required</sup> <a name="shareWithGroupLock" id="@cdktf/provider-gitlab.group.Group.property.shareWithGroupLock"></a>

```typescript
public readonly shareWithGroupLock: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `subgroupCreationLevel`<sup>Required</sup> <a name="subgroupCreationLevel" id="@cdktf/provider-gitlab.group.Group.property.subgroupCreationLevel"></a>

```typescript
public readonly subgroupCreationLevel: string;
```

- *Type:* string

---

##### `twoFactorGracePeriod`<sup>Required</sup> <a name="twoFactorGracePeriod" id="@cdktf/provider-gitlab.group.Group.property.twoFactorGracePeriod"></a>

```typescript
public readonly twoFactorGracePeriod: number;
```

- *Type:* number

---

##### `visibilityLevel`<sup>Required</sup> <a name="visibilityLevel" id="@cdktf/provider-gitlab.group.Group.property.visibilityLevel"></a>

```typescript
public readonly visibilityLevel: string;
```

- *Type:* string

---

##### `wikiAccessLevel`<sup>Required</sup> <a name="wikiAccessLevel" id="@cdktf/provider-gitlab.group.Group.property.wikiAccessLevel"></a>

```typescript
public readonly wikiAccessLevel: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.Group.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.group.Group.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GroupConfig <a name="GroupConfig" id="@cdktf/provider-gitlab.group.GroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.group.GroupConfig.Initializer"></a>

```typescript
import { group } from '@cdktf/provider-gitlab'

const groupConfig: group.GroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.name">name</a></code> | <code>string</code> | The name of the group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.path">path</a></code> | <code>string</code> | The path of the group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.allowedEmailDomainsList">allowedEmailDomainsList</a></code> | <code>string[]</code> | A list of email address domains to allow group access. Will be concatenated together into a comma separated string. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.autoDevopsEnabled">autoDevopsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Default to Auto DevOps pipeline for all projects within this group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.avatar">avatar</a></code> | <code>string</code> | A local path to the avatar image to upload. **Note**: not available for imported resources. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.avatarHash">avatarHash</a></code> | <code>string</code> | The hash of the avatar image. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.defaultBranch">defaultBranch</a></code> | <code>string</code> | Initial default branch name. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.defaultBranchProtection">defaultBranchProtection</a></code> | <code>number</code> | See https://docs.gitlab.com/api/groups/#options-for-default_branch_protection. Valid values are: `0`, `1`, `2`, `3`, `4`. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.defaultBranchProtectionDefaults">defaultBranchProtectionDefaults</a></code> | <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults">GroupDefaultBranchProtectionDefaults</a></code> | default_branch_protection_defaults block. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.description">description</a></code> | <code>string</code> | The group's description. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.emailsEnabled">emailsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable email notifications. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.extraSharedRunnersMinutesLimit">extraSharedRunnersMinutesLimit</a></code> | <code>number</code> | Can be set by administrators only. Additional CI/CD minutes for this group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group#id Group#id}. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.ipRestrictionRanges">ipRestrictionRanges</a></code> | <code>string[]</code> | A list of IP addresses or subnet masks to restrict group access. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.lfsEnabled">lfsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable/disable Large File Storage (LFS) for the projects in this group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.membershipLock">membershipLock</a></code> | <code>boolean \| cdktf.IResolvable</code> | Users cannot be added to projects in this group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.mentionsDisabled">mentionsDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Disable the capability of a group from getting mentioned. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.parentId">parentId</a></code> | <code>number</code> | Id of the parent group (creates a nested group). |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.permanentlyRemoveOnDelete">permanentlyRemoveOnDelete</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the group should be permanently removed during a `delete` operation. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.preventForkingOutsideGroup">preventForkingOutsideGroup</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defaults to false. When enabled, users can not fork projects from this group to external namespaces. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.projectCreationLevel">projectCreationLevel</a></code> | <code>string</code> | Determine if developers can create projects in the group. Valid values are: `noone`, `owner`, `maintainer`, `developer`, `administrator`. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.pushRules">pushRules</a></code> | <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules">GroupPushRules</a></code> | push_rules block. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.requestAccessEnabled">requestAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow users to request member access. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.requireTwoFactorAuthentication">requireTwoFactorAuthentication</a></code> | <code>boolean \| cdktf.IResolvable</code> | Require all users in this group to setup Two-factor authentication. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.sharedRunnersMinutesLimit">sharedRunnersMinutesLimit</a></code> | <code>number</code> | Can be set by administrators only. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.sharedRunnersSetting">sharedRunnersSetting</a></code> | <code>string</code> | Enable or disable shared runners for a group’s subgroups and projects. Valid values are: `enabled`, `disabled_and_overridable`, `disabled_and_unoverridable`, `disabled_with_override`. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.shareWithGroupLock">shareWithGroupLock</a></code> | <code>boolean \| cdktf.IResolvable</code> | Prevent sharing a project with another group within this group. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.subgroupCreationLevel">subgroupCreationLevel</a></code> | <code>string</code> | Allowed to create subgroups. Valid values are: `owner`, `maintainer`. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.twoFactorGracePeriod">twoFactorGracePeriod</a></code> | <code>number</code> | Defaults to 48. Time before Two-factor authentication is enforced (in hours). |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.visibilityLevel">visibilityLevel</a></code> | <code>string</code> | The group's visibility. Can be `private`, `internal`, or `public`. Valid values are: `private`, `internal`, `public`. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupConfig.property.wikiAccessLevel">wikiAccessLevel</a></code> | <code>string</code> | The group's wiki access level. Only available on Premium and Ultimate plans. Valid values are `disabled`, `private`, `enabled`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.group.GroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.group.GroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.group.GroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.group.GroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.group.GroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.group.GroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.group.GroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.group.GroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group#name Group#name}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.group.GroupConfig.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The path of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group#path Group#path}

---

##### `allowedEmailDomainsList`<sup>Optional</sup> <a name="allowedEmailDomainsList" id="@cdktf/provider-gitlab.group.GroupConfig.property.allowedEmailDomainsList"></a>

```typescript
public readonly allowedEmailDomainsList: string[];
```

- *Type:* string[]

A list of email address domains to allow group access. Will be concatenated together into a comma separated string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group#allowed_email_domains_list Group#allowed_email_domains_list}

---

##### `autoDevopsEnabled`<sup>Optional</sup> <a name="autoDevopsEnabled" id="@cdktf/provider-gitlab.group.GroupConfig.property.autoDevopsEnabled"></a>

```typescript
public readonly autoDevopsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Default to Auto DevOps pipeline for all projects within this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group#auto_devops_enabled Group#auto_devops_enabled}

---

##### `avatar`<sup>Optional</sup> <a name="avatar" id="@cdktf/provider-gitlab.group.GroupConfig.property.avatar"></a>

```typescript
public readonly avatar: string;
```

- *Type:* string

A local path to the avatar image to upload. **Note**: not available for imported resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group#avatar Group#avatar}

---

##### `avatarHash`<sup>Optional</sup> <a name="avatarHash" id="@cdktf/provider-gitlab.group.GroupConfig.property.avatarHash"></a>

```typescript
public readonly avatarHash: string;
```

- *Type:* string

The hash of the avatar image.

Use `filesha256("path/to/avatar.png")` whenever possible. **Note**: this is used to trigger an update of the avatar. If it's not given, but an avatar is given, the avatar will be updated each time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group#avatar_hash Group#avatar_hash}

---

##### `defaultBranch`<sup>Optional</sup> <a name="defaultBranch" id="@cdktf/provider-gitlab.group.GroupConfig.property.defaultBranch"></a>

```typescript
public readonly defaultBranch: string;
```

- *Type:* string

Initial default branch name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group#default_branch Group#default_branch}

---

##### `defaultBranchProtection`<sup>Optional</sup> <a name="defaultBranchProtection" id="@cdktf/provider-gitlab.group.GroupConfig.property.defaultBranchProtection"></a>

```typescript
public readonly defaultBranchProtection: number;
```

- *Type:* number

See https://docs.gitlab.com/api/groups/#options-for-default_branch_protection. Valid values are: `0`, `1`, `2`, `3`, `4`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group#default_branch_protection Group#default_branch_protection}

---

##### `defaultBranchProtectionDefaults`<sup>Optional</sup> <a name="defaultBranchProtectionDefaults" id="@cdktf/provider-gitlab.group.GroupConfig.property.defaultBranchProtectionDefaults"></a>

```typescript
public readonly defaultBranchProtectionDefaults: GroupDefaultBranchProtectionDefaults;
```

- *Type:* <a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults">GroupDefaultBranchProtectionDefaults</a>

default_branch_protection_defaults block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group#default_branch_protection_defaults Group#default_branch_protection_defaults}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-gitlab.group.GroupConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The group's description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group#description Group#description}

---

##### `emailsEnabled`<sup>Optional</sup> <a name="emailsEnabled" id="@cdktf/provider-gitlab.group.GroupConfig.property.emailsEnabled"></a>

```typescript
public readonly emailsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable email notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group#emails_enabled Group#emails_enabled}

---

##### `extraSharedRunnersMinutesLimit`<sup>Optional</sup> <a name="extraSharedRunnersMinutesLimit" id="@cdktf/provider-gitlab.group.GroupConfig.property.extraSharedRunnersMinutesLimit"></a>

```typescript
public readonly extraSharedRunnersMinutesLimit: number;
```

- *Type:* number

Can be set by administrators only. Additional CI/CD minutes for this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group#extra_shared_runners_minutes_limit Group#extra_shared_runners_minutes_limit}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.group.GroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group#id Group#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipRestrictionRanges`<sup>Optional</sup> <a name="ipRestrictionRanges" id="@cdktf/provider-gitlab.group.GroupConfig.property.ipRestrictionRanges"></a>

```typescript
public readonly ipRestrictionRanges: string[];
```

- *Type:* string[]

A list of IP addresses or subnet masks to restrict group access.

Will be concatenated together into a comma separated string. Only allowed on top level groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group#ip_restriction_ranges Group#ip_restriction_ranges}

---

##### `lfsEnabled`<sup>Optional</sup> <a name="lfsEnabled" id="@cdktf/provider-gitlab.group.GroupConfig.property.lfsEnabled"></a>

```typescript
public readonly lfsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable/disable Large File Storage (LFS) for the projects in this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group#lfs_enabled Group#lfs_enabled}

---

##### `membershipLock`<sup>Optional</sup> <a name="membershipLock" id="@cdktf/provider-gitlab.group.GroupConfig.property.membershipLock"></a>

```typescript
public readonly membershipLock: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Users cannot be added to projects in this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group#membership_lock Group#membership_lock}

---

##### `mentionsDisabled`<sup>Optional</sup> <a name="mentionsDisabled" id="@cdktf/provider-gitlab.group.GroupConfig.property.mentionsDisabled"></a>

```typescript
public readonly mentionsDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Disable the capability of a group from getting mentioned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group#mentions_disabled Group#mentions_disabled}

---

##### `parentId`<sup>Optional</sup> <a name="parentId" id="@cdktf/provider-gitlab.group.GroupConfig.property.parentId"></a>

```typescript
public readonly parentId: number;
```

- *Type:* number

Id of the parent group (creates a nested group).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group#parent_id Group#parent_id}

---

##### `permanentlyRemoveOnDelete`<sup>Optional</sup> <a name="permanentlyRemoveOnDelete" id="@cdktf/provider-gitlab.group.GroupConfig.property.permanentlyRemoveOnDelete"></a>

```typescript
public readonly permanentlyRemoveOnDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the group should be permanently removed during a `delete` operation.

This only works with subgroups. Must be configured via an `apply` before the `destroy` is run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group#permanently_remove_on_delete Group#permanently_remove_on_delete}

---

##### `preventForkingOutsideGroup`<sup>Optional</sup> <a name="preventForkingOutsideGroup" id="@cdktf/provider-gitlab.group.GroupConfig.property.preventForkingOutsideGroup"></a>

```typescript
public readonly preventForkingOutsideGroup: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defaults to false. When enabled, users can not fork projects from this group to external namespaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group#prevent_forking_outside_group Group#prevent_forking_outside_group}

---

##### `projectCreationLevel`<sup>Optional</sup> <a name="projectCreationLevel" id="@cdktf/provider-gitlab.group.GroupConfig.property.projectCreationLevel"></a>

```typescript
public readonly projectCreationLevel: string;
```

- *Type:* string

Determine if developers can create projects in the group. Valid values are: `noone`, `owner`, `maintainer`, `developer`, `administrator`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group#project_creation_level Group#project_creation_level}

---

##### `pushRules`<sup>Optional</sup> <a name="pushRules" id="@cdktf/provider-gitlab.group.GroupConfig.property.pushRules"></a>

```typescript
public readonly pushRules: GroupPushRules;
```

- *Type:* <a href="#@cdktf/provider-gitlab.group.GroupPushRules">GroupPushRules</a>

push_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group#push_rules Group#push_rules}

---

##### `requestAccessEnabled`<sup>Optional</sup> <a name="requestAccessEnabled" id="@cdktf/provider-gitlab.group.GroupConfig.property.requestAccessEnabled"></a>

```typescript
public readonly requestAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow users to request member access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group#request_access_enabled Group#request_access_enabled}

---

##### `requireTwoFactorAuthentication`<sup>Optional</sup> <a name="requireTwoFactorAuthentication" id="@cdktf/provider-gitlab.group.GroupConfig.property.requireTwoFactorAuthentication"></a>

```typescript
public readonly requireTwoFactorAuthentication: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Require all users in this group to setup Two-factor authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group#require_two_factor_authentication Group#require_two_factor_authentication}

---

##### `sharedRunnersMinutesLimit`<sup>Optional</sup> <a name="sharedRunnersMinutesLimit" id="@cdktf/provider-gitlab.group.GroupConfig.property.sharedRunnersMinutesLimit"></a>

```typescript
public readonly sharedRunnersMinutesLimit: number;
```

- *Type:* number

Can be set by administrators only.

Maximum number of monthly CI/CD minutes for this group. Can be nil (default; inherit system default), 0 (unlimited), or > 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group#shared_runners_minutes_limit Group#shared_runners_minutes_limit}

---

##### `sharedRunnersSetting`<sup>Optional</sup> <a name="sharedRunnersSetting" id="@cdktf/provider-gitlab.group.GroupConfig.property.sharedRunnersSetting"></a>

```typescript
public readonly sharedRunnersSetting: string;
```

- *Type:* string

Enable or disable shared runners for a group’s subgroups and projects. Valid values are: `enabled`, `disabled_and_overridable`, `disabled_and_unoverridable`, `disabled_with_override`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group#shared_runners_setting Group#shared_runners_setting}

---

##### `shareWithGroupLock`<sup>Optional</sup> <a name="shareWithGroupLock" id="@cdktf/provider-gitlab.group.GroupConfig.property.shareWithGroupLock"></a>

```typescript
public readonly shareWithGroupLock: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Prevent sharing a project with another group within this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group#share_with_group_lock Group#share_with_group_lock}

---

##### `subgroupCreationLevel`<sup>Optional</sup> <a name="subgroupCreationLevel" id="@cdktf/provider-gitlab.group.GroupConfig.property.subgroupCreationLevel"></a>

```typescript
public readonly subgroupCreationLevel: string;
```

- *Type:* string

Allowed to create subgroups. Valid values are: `owner`, `maintainer`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group#subgroup_creation_level Group#subgroup_creation_level}

---

##### `twoFactorGracePeriod`<sup>Optional</sup> <a name="twoFactorGracePeriod" id="@cdktf/provider-gitlab.group.GroupConfig.property.twoFactorGracePeriod"></a>

```typescript
public readonly twoFactorGracePeriod: number;
```

- *Type:* number

Defaults to 48. Time before Two-factor authentication is enforced (in hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group#two_factor_grace_period Group#two_factor_grace_period}

---

##### `visibilityLevel`<sup>Optional</sup> <a name="visibilityLevel" id="@cdktf/provider-gitlab.group.GroupConfig.property.visibilityLevel"></a>

```typescript
public readonly visibilityLevel: string;
```

- *Type:* string

The group's visibility. Can be `private`, `internal`, or `public`. Valid values are: `private`, `internal`, `public`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group#visibility_level Group#visibility_level}

---

##### `wikiAccessLevel`<sup>Optional</sup> <a name="wikiAccessLevel" id="@cdktf/provider-gitlab.group.GroupConfig.property.wikiAccessLevel"></a>

```typescript
public readonly wikiAccessLevel: string;
```

- *Type:* string

The group's wiki access level. Only available on Premium and Ultimate plans. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group#wiki_access_level Group#wiki_access_level}

---

### GroupDefaultBranchProtectionDefaults <a name="GroupDefaultBranchProtectionDefaults" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults.Initializer"></a>

```typescript
import { group } from '@cdktf/provider-gitlab'

const groupDefaultBranchProtectionDefaults: group.GroupDefaultBranchProtectionDefaults = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults.property.allowedToMerge">allowedToMerge</a></code> | <code>string[]</code> | An array of access levels allowed to merge. Valid values are: `developer`, `maintainer`, `no one`. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults.property.allowedToPush">allowedToPush</a></code> | <code>string[]</code> | An array of access levels allowed to push. Valid values are: `developer`, `maintainer`, `no one`. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults.property.allowForcePush">allowForcePush</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow force push for all users with push access. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults.property.developerCanInitialPush">developerCanInitialPush</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow developers to initial push. |

---

##### `allowedToMerge`<sup>Optional</sup> <a name="allowedToMerge" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults.property.allowedToMerge"></a>

```typescript
public readonly allowedToMerge: string[];
```

- *Type:* string[]

An array of access levels allowed to merge. Valid values are: `developer`, `maintainer`, `no one`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group#allowed_to_merge Group#allowed_to_merge}

---

##### `allowedToPush`<sup>Optional</sup> <a name="allowedToPush" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults.property.allowedToPush"></a>

```typescript
public readonly allowedToPush: string[];
```

- *Type:* string[]

An array of access levels allowed to push. Valid values are: `developer`, `maintainer`, `no one`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group#allowed_to_push Group#allowed_to_push}

---

##### `allowForcePush`<sup>Optional</sup> <a name="allowForcePush" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults.property.allowForcePush"></a>

```typescript
public readonly allowForcePush: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow force push for all users with push access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group#allow_force_push Group#allow_force_push}

---

##### `developerCanInitialPush`<sup>Optional</sup> <a name="developerCanInitialPush" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults.property.developerCanInitialPush"></a>

```typescript
public readonly developerCanInitialPush: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow developers to initial push.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group#developer_can_initial_push Group#developer_can_initial_push}

---

### GroupPushRules <a name="GroupPushRules" id="@cdktf/provider-gitlab.group.GroupPushRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.group.GroupPushRules.Initializer"></a>

```typescript
import { group } from '@cdktf/provider-gitlab'

const groupPushRules: group.GroupPushRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules.property.authorEmailRegex">authorEmailRegex</a></code> | <code>string</code> | All commit author emails must match this regex, e.g. `@my-company.com$`. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules.property.branchNameRegex">branchNameRegex</a></code> | <code>string</code> | All branch names must match this regex, e.g. `(feature\|hotfix)\/*`. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules.property.commitCommitterCheck">commitCommitterCheck</a></code> | <code>boolean \| cdktf.IResolvable</code> | Only commits pushed using verified emails are allowed. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules.property.commitCommitterNameCheck">commitCommitterNameCheck</a></code> | <code>boolean \| cdktf.IResolvable</code> | Users can only push commits to this repository if the commit author name is consistent with their GitLab account name. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules.property.commitMessageNegativeRegex">commitMessageNegativeRegex</a></code> | <code>string</code> | No commit message is allowed to match this regex, for example `ssh\:\/\/`. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules.property.commitMessageRegex">commitMessageRegex</a></code> | <code>string</code> | All commit messages must match this regex, e.g. `Fixed \d+\..*`. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules.property.denyDeleteTag">denyDeleteTag</a></code> | <code>boolean \| cdktf.IResolvable</code> | Deny deleting a tag. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules.property.fileNameRegex">fileNameRegex</a></code> | <code>string</code> | Filenames matching the regular expression provided in this attribute are not allowed, for example, `(jar\|exe)$`. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules.property.maxFileSize">maxFileSize</a></code> | <code>number</code> | Maximum file size (MB) allowed. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules.property.memberCheck">memberCheck</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allows only GitLab users to author commits. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules.property.preventSecrets">preventSecrets</a></code> | <code>boolean \| cdktf.IResolvable</code> | GitLab will reject any files that are likely to contain secrets. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules.property.rejectNonDcoCommits">rejectNonDcoCommits</a></code> | <code>boolean \| cdktf.IResolvable</code> | Reject commit when it’s not DCO certified. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules.property.rejectUnsignedCommits">rejectUnsignedCommits</a></code> | <code>boolean \| cdktf.IResolvable</code> | Only commits signed through GPG are allowed. |

---

##### `authorEmailRegex`<sup>Optional</sup> <a name="authorEmailRegex" id="@cdktf/provider-gitlab.group.GroupPushRules.property.authorEmailRegex"></a>

```typescript
public readonly authorEmailRegex: string;
```

- *Type:* string

All commit author emails must match this regex, e.g. `@my-company.com$`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group#author_email_regex Group#author_email_regex}

---

##### `branchNameRegex`<sup>Optional</sup> <a name="branchNameRegex" id="@cdktf/provider-gitlab.group.GroupPushRules.property.branchNameRegex"></a>

```typescript
public readonly branchNameRegex: string;
```

- *Type:* string

All branch names must match this regex, e.g. `(feature|hotfix)\/*`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group#branch_name_regex Group#branch_name_regex}

---

##### `commitCommitterCheck`<sup>Optional</sup> <a name="commitCommitterCheck" id="@cdktf/provider-gitlab.group.GroupPushRules.property.commitCommitterCheck"></a>

```typescript
public readonly commitCommitterCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Only commits pushed using verified emails are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group#commit_committer_check Group#commit_committer_check}

---

##### `commitCommitterNameCheck`<sup>Optional</sup> <a name="commitCommitterNameCheck" id="@cdktf/provider-gitlab.group.GroupPushRules.property.commitCommitterNameCheck"></a>

```typescript
public readonly commitCommitterNameCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Users can only push commits to this repository if the commit author name is consistent with their GitLab account name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group#commit_committer_name_check Group#commit_committer_name_check}

---

##### `commitMessageNegativeRegex`<sup>Optional</sup> <a name="commitMessageNegativeRegex" id="@cdktf/provider-gitlab.group.GroupPushRules.property.commitMessageNegativeRegex"></a>

```typescript
public readonly commitMessageNegativeRegex: string;
```

- *Type:* string

No commit message is allowed to match this regex, for example `ssh\:\/\/`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group#commit_message_negative_regex Group#commit_message_negative_regex}

---

##### `commitMessageRegex`<sup>Optional</sup> <a name="commitMessageRegex" id="@cdktf/provider-gitlab.group.GroupPushRules.property.commitMessageRegex"></a>

```typescript
public readonly commitMessageRegex: string;
```

- *Type:* string

All commit messages must match this regex, e.g. `Fixed \d+\..*`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group#commit_message_regex Group#commit_message_regex}

---

##### `denyDeleteTag`<sup>Optional</sup> <a name="denyDeleteTag" id="@cdktf/provider-gitlab.group.GroupPushRules.property.denyDeleteTag"></a>

```typescript
public readonly denyDeleteTag: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Deny deleting a tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group#deny_delete_tag Group#deny_delete_tag}

---

##### `fileNameRegex`<sup>Optional</sup> <a name="fileNameRegex" id="@cdktf/provider-gitlab.group.GroupPushRules.property.fileNameRegex"></a>

```typescript
public readonly fileNameRegex: string;
```

- *Type:* string

Filenames matching the regular expression provided in this attribute are not allowed, for example, `(jar|exe)$`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group#file_name_regex Group#file_name_regex}

---

##### `maxFileSize`<sup>Optional</sup> <a name="maxFileSize" id="@cdktf/provider-gitlab.group.GroupPushRules.property.maxFileSize"></a>

```typescript
public readonly maxFileSize: number;
```

- *Type:* number

Maximum file size (MB) allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group#max_file_size Group#max_file_size}

---

##### `memberCheck`<sup>Optional</sup> <a name="memberCheck" id="@cdktf/provider-gitlab.group.GroupPushRules.property.memberCheck"></a>

```typescript
public readonly memberCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allows only GitLab users to author commits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group#member_check Group#member_check}

---

##### `preventSecrets`<sup>Optional</sup> <a name="preventSecrets" id="@cdktf/provider-gitlab.group.GroupPushRules.property.preventSecrets"></a>

```typescript
public readonly preventSecrets: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

GitLab will reject any files that are likely to contain secrets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group#prevent_secrets Group#prevent_secrets}

---

##### `rejectNonDcoCommits`<sup>Optional</sup> <a name="rejectNonDcoCommits" id="@cdktf/provider-gitlab.group.GroupPushRules.property.rejectNonDcoCommits"></a>

```typescript
public readonly rejectNonDcoCommits: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Reject commit when it’s not DCO certified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group#reject_non_dco_commits Group#reject_non_dco_commits}

---

##### `rejectUnsignedCommits`<sup>Optional</sup> <a name="rejectUnsignedCommits" id="@cdktf/provider-gitlab.group.GroupPushRules.property.rejectUnsignedCommits"></a>

```typescript
public readonly rejectUnsignedCommits: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Only commits signed through GPG are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group#reject_unsigned_commits Group#reject_unsigned_commits}

---

## Classes <a name="Classes" id="Classes"></a>

### GroupDefaultBranchProtectionDefaultsOutputReference <a name="GroupDefaultBranchProtectionDefaultsOutputReference" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.Initializer"></a>

```typescript
import { group } from '@cdktf/provider-gitlab'

new group.GroupDefaultBranchProtectionDefaultsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.resetAllowedToMerge">resetAllowedToMerge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.resetAllowedToPush">resetAllowedToPush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.resetAllowForcePush">resetAllowForcePush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.resetDeveloperCanInitialPush">resetDeveloperCanInitialPush</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedToMerge` <a name="resetAllowedToMerge" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.resetAllowedToMerge"></a>

```typescript
public resetAllowedToMerge(): void
```

##### `resetAllowedToPush` <a name="resetAllowedToPush" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.resetAllowedToPush"></a>

```typescript
public resetAllowedToPush(): void
```

##### `resetAllowForcePush` <a name="resetAllowForcePush" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.resetAllowForcePush"></a>

```typescript
public resetAllowForcePush(): void
```

##### `resetDeveloperCanInitialPush` <a name="resetDeveloperCanInitialPush" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.resetDeveloperCanInitialPush"></a>

```typescript
public resetDeveloperCanInitialPush(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.allowedToMergeInput">allowedToMergeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.allowedToPushInput">allowedToPushInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.allowForcePushInput">allowForcePushInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.developerCanInitialPushInput">developerCanInitialPushInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.allowedToMerge">allowedToMerge</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.allowedToPush">allowedToPush</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.allowForcePush">allowForcePush</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.developerCanInitialPush">developerCanInitialPush</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults">GroupDefaultBranchProtectionDefaults</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedToMergeInput`<sup>Optional</sup> <a name="allowedToMergeInput" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.allowedToMergeInput"></a>

```typescript
public readonly allowedToMergeInput: string[];
```

- *Type:* string[]

---

##### `allowedToPushInput`<sup>Optional</sup> <a name="allowedToPushInput" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.allowedToPushInput"></a>

```typescript
public readonly allowedToPushInput: string[];
```

- *Type:* string[]

---

##### `allowForcePushInput`<sup>Optional</sup> <a name="allowForcePushInput" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.allowForcePushInput"></a>

```typescript
public readonly allowForcePushInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `developerCanInitialPushInput`<sup>Optional</sup> <a name="developerCanInitialPushInput" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.developerCanInitialPushInput"></a>

```typescript
public readonly developerCanInitialPushInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedToMerge`<sup>Required</sup> <a name="allowedToMerge" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.allowedToMerge"></a>

```typescript
public readonly allowedToMerge: string[];
```

- *Type:* string[]

---

##### `allowedToPush`<sup>Required</sup> <a name="allowedToPush" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.allowedToPush"></a>

```typescript
public readonly allowedToPush: string[];
```

- *Type:* string[]

---

##### `allowForcePush`<sup>Required</sup> <a name="allowForcePush" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.allowForcePush"></a>

```typescript
public readonly allowForcePush: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `developerCanInitialPush`<sup>Required</sup> <a name="developerCanInitialPush" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.developerCanInitialPush"></a>

```typescript
public readonly developerCanInitialPush: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaultsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GroupDefaultBranchProtectionDefaults;
```

- *Type:* <a href="#@cdktf/provider-gitlab.group.GroupDefaultBranchProtectionDefaults">GroupDefaultBranchProtectionDefaults</a>

---


### GroupPushRulesOutputReference <a name="GroupPushRulesOutputReference" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.Initializer"></a>

```typescript
import { group } from '@cdktf/provider-gitlab'

new group.GroupPushRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetAuthorEmailRegex">resetAuthorEmailRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetBranchNameRegex">resetBranchNameRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetCommitCommitterCheck">resetCommitCommitterCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetCommitCommitterNameCheck">resetCommitCommitterNameCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetCommitMessageNegativeRegex">resetCommitMessageNegativeRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetCommitMessageRegex">resetCommitMessageRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetDenyDeleteTag">resetDenyDeleteTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetFileNameRegex">resetFileNameRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetMaxFileSize">resetMaxFileSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetMemberCheck">resetMemberCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetPreventSecrets">resetPreventSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetRejectNonDcoCommits">resetRejectNonDcoCommits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetRejectUnsignedCommits">resetRejectUnsignedCommits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthorEmailRegex` <a name="resetAuthorEmailRegex" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetAuthorEmailRegex"></a>

```typescript
public resetAuthorEmailRegex(): void
```

##### `resetBranchNameRegex` <a name="resetBranchNameRegex" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetBranchNameRegex"></a>

```typescript
public resetBranchNameRegex(): void
```

##### `resetCommitCommitterCheck` <a name="resetCommitCommitterCheck" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetCommitCommitterCheck"></a>

```typescript
public resetCommitCommitterCheck(): void
```

##### `resetCommitCommitterNameCheck` <a name="resetCommitCommitterNameCheck" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetCommitCommitterNameCheck"></a>

```typescript
public resetCommitCommitterNameCheck(): void
```

##### `resetCommitMessageNegativeRegex` <a name="resetCommitMessageNegativeRegex" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetCommitMessageNegativeRegex"></a>

```typescript
public resetCommitMessageNegativeRegex(): void
```

##### `resetCommitMessageRegex` <a name="resetCommitMessageRegex" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetCommitMessageRegex"></a>

```typescript
public resetCommitMessageRegex(): void
```

##### `resetDenyDeleteTag` <a name="resetDenyDeleteTag" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetDenyDeleteTag"></a>

```typescript
public resetDenyDeleteTag(): void
```

##### `resetFileNameRegex` <a name="resetFileNameRegex" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetFileNameRegex"></a>

```typescript
public resetFileNameRegex(): void
```

##### `resetMaxFileSize` <a name="resetMaxFileSize" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetMaxFileSize"></a>

```typescript
public resetMaxFileSize(): void
```

##### `resetMemberCheck` <a name="resetMemberCheck" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetMemberCheck"></a>

```typescript
public resetMemberCheck(): void
```

##### `resetPreventSecrets` <a name="resetPreventSecrets" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetPreventSecrets"></a>

```typescript
public resetPreventSecrets(): void
```

##### `resetRejectNonDcoCommits` <a name="resetRejectNonDcoCommits" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetRejectNonDcoCommits"></a>

```typescript
public resetRejectNonDcoCommits(): void
```

##### `resetRejectUnsignedCommits` <a name="resetRejectUnsignedCommits" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.resetRejectUnsignedCommits"></a>

```typescript
public resetRejectUnsignedCommits(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.authorEmailRegexInput">authorEmailRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.branchNameRegexInput">branchNameRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitCommitterCheckInput">commitCommitterCheckInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitCommitterNameCheckInput">commitCommitterNameCheckInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitMessageNegativeRegexInput">commitMessageNegativeRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitMessageRegexInput">commitMessageRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.denyDeleteTagInput">denyDeleteTagInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.fileNameRegexInput">fileNameRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.maxFileSizeInput">maxFileSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.memberCheckInput">memberCheckInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.preventSecretsInput">preventSecretsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.rejectNonDcoCommitsInput">rejectNonDcoCommitsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.rejectUnsignedCommitsInput">rejectUnsignedCommitsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.authorEmailRegex">authorEmailRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.branchNameRegex">branchNameRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitCommitterCheck">commitCommitterCheck</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitCommitterNameCheck">commitCommitterNameCheck</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitMessageNegativeRegex">commitMessageNegativeRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitMessageRegex">commitMessageRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.denyDeleteTag">denyDeleteTag</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.fileNameRegex">fileNameRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.maxFileSize">maxFileSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.memberCheck">memberCheck</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.preventSecrets">preventSecrets</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.rejectNonDcoCommits">rejectNonDcoCommits</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.rejectUnsignedCommits">rejectUnsignedCommits</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.group.GroupPushRules">GroupPushRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorEmailRegexInput`<sup>Optional</sup> <a name="authorEmailRegexInput" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.authorEmailRegexInput"></a>

```typescript
public readonly authorEmailRegexInput: string;
```

- *Type:* string

---

##### `branchNameRegexInput`<sup>Optional</sup> <a name="branchNameRegexInput" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.branchNameRegexInput"></a>

```typescript
public readonly branchNameRegexInput: string;
```

- *Type:* string

---

##### `commitCommitterCheckInput`<sup>Optional</sup> <a name="commitCommitterCheckInput" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitCommitterCheckInput"></a>

```typescript
public readonly commitCommitterCheckInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `commitCommitterNameCheckInput`<sup>Optional</sup> <a name="commitCommitterNameCheckInput" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitCommitterNameCheckInput"></a>

```typescript
public readonly commitCommitterNameCheckInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `commitMessageNegativeRegexInput`<sup>Optional</sup> <a name="commitMessageNegativeRegexInput" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitMessageNegativeRegexInput"></a>

```typescript
public readonly commitMessageNegativeRegexInput: string;
```

- *Type:* string

---

##### `commitMessageRegexInput`<sup>Optional</sup> <a name="commitMessageRegexInput" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitMessageRegexInput"></a>

```typescript
public readonly commitMessageRegexInput: string;
```

- *Type:* string

---

##### `denyDeleteTagInput`<sup>Optional</sup> <a name="denyDeleteTagInput" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.denyDeleteTagInput"></a>

```typescript
public readonly denyDeleteTagInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fileNameRegexInput`<sup>Optional</sup> <a name="fileNameRegexInput" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.fileNameRegexInput"></a>

```typescript
public readonly fileNameRegexInput: string;
```

- *Type:* string

---

##### `maxFileSizeInput`<sup>Optional</sup> <a name="maxFileSizeInput" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.maxFileSizeInput"></a>

```typescript
public readonly maxFileSizeInput: number;
```

- *Type:* number

---

##### `memberCheckInput`<sup>Optional</sup> <a name="memberCheckInput" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.memberCheckInput"></a>

```typescript
public readonly memberCheckInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `preventSecretsInput`<sup>Optional</sup> <a name="preventSecretsInput" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.preventSecretsInput"></a>

```typescript
public readonly preventSecretsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rejectNonDcoCommitsInput`<sup>Optional</sup> <a name="rejectNonDcoCommitsInput" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.rejectNonDcoCommitsInput"></a>

```typescript
public readonly rejectNonDcoCommitsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rejectUnsignedCommitsInput`<sup>Optional</sup> <a name="rejectUnsignedCommitsInput" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.rejectUnsignedCommitsInput"></a>

```typescript
public readonly rejectUnsignedCommitsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `authorEmailRegex`<sup>Required</sup> <a name="authorEmailRegex" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.authorEmailRegex"></a>

```typescript
public readonly authorEmailRegex: string;
```

- *Type:* string

---

##### `branchNameRegex`<sup>Required</sup> <a name="branchNameRegex" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.branchNameRegex"></a>

```typescript
public readonly branchNameRegex: string;
```

- *Type:* string

---

##### `commitCommitterCheck`<sup>Required</sup> <a name="commitCommitterCheck" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitCommitterCheck"></a>

```typescript
public readonly commitCommitterCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `commitCommitterNameCheck`<sup>Required</sup> <a name="commitCommitterNameCheck" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitCommitterNameCheck"></a>

```typescript
public readonly commitCommitterNameCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `commitMessageNegativeRegex`<sup>Required</sup> <a name="commitMessageNegativeRegex" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitMessageNegativeRegex"></a>

```typescript
public readonly commitMessageNegativeRegex: string;
```

- *Type:* string

---

##### `commitMessageRegex`<sup>Required</sup> <a name="commitMessageRegex" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.commitMessageRegex"></a>

```typescript
public readonly commitMessageRegex: string;
```

- *Type:* string

---

##### `denyDeleteTag`<sup>Required</sup> <a name="denyDeleteTag" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.denyDeleteTag"></a>

```typescript
public readonly denyDeleteTag: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fileNameRegex`<sup>Required</sup> <a name="fileNameRegex" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.fileNameRegex"></a>

```typescript
public readonly fileNameRegex: string;
```

- *Type:* string

---

##### `maxFileSize`<sup>Required</sup> <a name="maxFileSize" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.maxFileSize"></a>

```typescript
public readonly maxFileSize: number;
```

- *Type:* number

---

##### `memberCheck`<sup>Required</sup> <a name="memberCheck" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.memberCheck"></a>

```typescript
public readonly memberCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `preventSecrets`<sup>Required</sup> <a name="preventSecrets" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.preventSecrets"></a>

```typescript
public readonly preventSecrets: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rejectNonDcoCommits`<sup>Required</sup> <a name="rejectNonDcoCommits" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.rejectNonDcoCommits"></a>

```typescript
public readonly rejectNonDcoCommits: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rejectUnsignedCommits`<sup>Required</sup> <a name="rejectUnsignedCommits" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.rejectUnsignedCommits"></a>

```typescript
public readonly rejectUnsignedCommits: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.group.GroupPushRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GroupPushRules;
```

- *Type:* <a href="#@cdktf/provider-gitlab.group.GroupPushRules">GroupPushRules</a>

---



