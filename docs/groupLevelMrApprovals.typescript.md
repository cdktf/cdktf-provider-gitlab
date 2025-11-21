# `groupLevelMrApprovals` Submodule <a name="`groupLevelMrApprovals` Submodule" id="@cdktf/provider-gitlab.groupLevelMrApprovals"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GroupLevelMrApprovals <a name="GroupLevelMrApprovals" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/group_level_mr_approvals gitlab_group_level_mr_approvals}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer"></a>

```typescript
import { groupLevelMrApprovals } from '@cdktf/provider-gitlab'

new groupLevelMrApprovals.GroupLevelMrApprovals(scope: Construct, id: string, config: GroupLevelMrApprovalsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig">GroupLevelMrApprovalsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig">GroupLevelMrApprovalsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetAllowAuthorApproval">resetAllowAuthorApproval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetAllowCommitterApproval">resetAllowCommitterApproval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetAllowOverridesToApproverListPerMergeRequest">resetAllowOverridesToApproverListPerMergeRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetKeepSettingsOnDestroy">resetKeepSettingsOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetRequireReauthenticationToApprove">resetRequireReauthenticationToApprove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetRetainApprovalsOnPush">resetRetainApprovalsOnPush</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAllowAuthorApproval` <a name="resetAllowAuthorApproval" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetAllowAuthorApproval"></a>

```typescript
public resetAllowAuthorApproval(): void
```

##### `resetAllowCommitterApproval` <a name="resetAllowCommitterApproval" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetAllowCommitterApproval"></a>

```typescript
public resetAllowCommitterApproval(): void
```

##### `resetAllowOverridesToApproverListPerMergeRequest` <a name="resetAllowOverridesToApproverListPerMergeRequest" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetAllowOverridesToApproverListPerMergeRequest"></a>

```typescript
public resetAllowOverridesToApproverListPerMergeRequest(): void
```

##### `resetKeepSettingsOnDestroy` <a name="resetKeepSettingsOnDestroy" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetKeepSettingsOnDestroy"></a>

```typescript
public resetKeepSettingsOnDestroy(): void
```

##### `resetRequireReauthenticationToApprove` <a name="resetRequireReauthenticationToApprove" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetRequireReauthenticationToApprove"></a>

```typescript
public resetRequireReauthenticationToApprove(): void
```

##### `resetRetainApprovalsOnPush` <a name="resetRetainApprovalsOnPush" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetRetainApprovalsOnPush"></a>

```typescript
public resetRetainApprovalsOnPush(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GroupLevelMrApprovals resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.isConstruct"></a>

```typescript
import { groupLevelMrApprovals } from '@cdktf/provider-gitlab'

groupLevelMrApprovals.GroupLevelMrApprovals.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.isTerraformElement"></a>

```typescript
import { groupLevelMrApprovals } from '@cdktf/provider-gitlab'

groupLevelMrApprovals.GroupLevelMrApprovals.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.isTerraformResource"></a>

```typescript
import { groupLevelMrApprovals } from '@cdktf/provider-gitlab'

groupLevelMrApprovals.GroupLevelMrApprovals.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.generateConfigForImport"></a>

```typescript
import { groupLevelMrApprovals } from '@cdktf/provider-gitlab'

groupLevelMrApprovals.GroupLevelMrApprovals.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GroupLevelMrApprovals resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GroupLevelMrApprovals to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GroupLevelMrApprovals that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/group_level_mr_approvals#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GroupLevelMrApprovals to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.allowAuthorApprovalInput">allowAuthorApprovalInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.allowCommitterApprovalInput">allowCommitterApprovalInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.allowOverridesToApproverListPerMergeRequestInput">allowOverridesToApproverListPerMergeRequestInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.groupInput">groupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.keepSettingsOnDestroyInput">keepSettingsOnDestroyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.requireReauthenticationToApproveInput">requireReauthenticationToApproveInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.retainApprovalsOnPushInput">retainApprovalsOnPushInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.allowAuthorApproval">allowAuthorApproval</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.allowCommitterApproval">allowCommitterApproval</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.allowOverridesToApproverListPerMergeRequest">allowOverridesToApproverListPerMergeRequest</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.group">group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.keepSettingsOnDestroy">keepSettingsOnDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.requireReauthenticationToApprove">requireReauthenticationToApprove</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.retainApprovalsOnPush">retainApprovalsOnPush</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `allowAuthorApprovalInput`<sup>Optional</sup> <a name="allowAuthorApprovalInput" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.allowAuthorApprovalInput"></a>

```typescript
public readonly allowAuthorApprovalInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowCommitterApprovalInput`<sup>Optional</sup> <a name="allowCommitterApprovalInput" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.allowCommitterApprovalInput"></a>

```typescript
public readonly allowCommitterApprovalInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowOverridesToApproverListPerMergeRequestInput`<sup>Optional</sup> <a name="allowOverridesToApproverListPerMergeRequestInput" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.allowOverridesToApproverListPerMergeRequestInput"></a>

```typescript
public readonly allowOverridesToApproverListPerMergeRequestInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.groupInput"></a>

```typescript
public readonly groupInput: string;
```

- *Type:* string

---

##### `keepSettingsOnDestroyInput`<sup>Optional</sup> <a name="keepSettingsOnDestroyInput" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.keepSettingsOnDestroyInput"></a>

```typescript
public readonly keepSettingsOnDestroyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requireReauthenticationToApproveInput`<sup>Optional</sup> <a name="requireReauthenticationToApproveInput" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.requireReauthenticationToApproveInput"></a>

```typescript
public readonly requireReauthenticationToApproveInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retainApprovalsOnPushInput`<sup>Optional</sup> <a name="retainApprovalsOnPushInput" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.retainApprovalsOnPushInput"></a>

```typescript
public readonly retainApprovalsOnPushInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowAuthorApproval`<sup>Required</sup> <a name="allowAuthorApproval" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.allowAuthorApproval"></a>

```typescript
public readonly allowAuthorApproval: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowCommitterApproval`<sup>Required</sup> <a name="allowCommitterApproval" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.allowCommitterApproval"></a>

```typescript
public readonly allowCommitterApproval: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowOverridesToApproverListPerMergeRequest`<sup>Required</sup> <a name="allowOverridesToApproverListPerMergeRequest" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.allowOverridesToApproverListPerMergeRequest"></a>

```typescript
public readonly allowOverridesToApproverListPerMergeRequest: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

---

##### `keepSettingsOnDestroy`<sup>Required</sup> <a name="keepSettingsOnDestroy" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.keepSettingsOnDestroy"></a>

```typescript
public readonly keepSettingsOnDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requireReauthenticationToApprove`<sup>Required</sup> <a name="requireReauthenticationToApprove" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.requireReauthenticationToApprove"></a>

```typescript
public readonly requireReauthenticationToApprove: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retainApprovalsOnPush`<sup>Required</sup> <a name="retainApprovalsOnPush" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.retainApprovalsOnPush"></a>

```typescript
public readonly retainApprovalsOnPush: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GroupLevelMrApprovalsConfig <a name="GroupLevelMrApprovalsConfig" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.Initializer"></a>

```typescript
import { groupLevelMrApprovals } from '@cdktf/provider-gitlab'

const groupLevelMrApprovalsConfig: groupLevelMrApprovals.GroupLevelMrApprovalsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.group">group</a></code> | <code>string</code> | The ID or URL-encoded path of the group. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.allowAuthorApproval">allowAuthorApproval</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow or prevent authors from self approving merge requests; `true` means authors can self approve. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.allowCommitterApproval">allowCommitterApproval</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow or prevent committers from self approving merge requests. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.allowOverridesToApproverListPerMergeRequest">allowOverridesToApproverListPerMergeRequest</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow or prevent overriding approvers per merge request. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.keepSettingsOnDestroy">keepSettingsOnDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set to true if the group merge request approval settings should not be reset to their pre-terraform defaults on destroy. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.requireReauthenticationToApprove">requireReauthenticationToApprove</a></code> | <code>boolean \| cdktf.IResolvable</code> | Require approver to authenticate before adding the approval. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.retainApprovalsOnPush">retainApprovalsOnPush</a></code> | <code>boolean \| cdktf.IResolvable</code> | Retain approval count on a new push. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

The ID or URL-encoded path of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/group_level_mr_approvals#group GroupLevelMrApprovals#group}

---

##### `allowAuthorApproval`<sup>Optional</sup> <a name="allowAuthorApproval" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.allowAuthorApproval"></a>

```typescript
public readonly allowAuthorApproval: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow or prevent authors from self approving merge requests; `true` means authors can self approve.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/group_level_mr_approvals#allow_author_approval GroupLevelMrApprovals#allow_author_approval}

---

##### `allowCommitterApproval`<sup>Optional</sup> <a name="allowCommitterApproval" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.allowCommitterApproval"></a>

```typescript
public readonly allowCommitterApproval: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow or prevent committers from self approving merge requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/group_level_mr_approvals#allow_committer_approval GroupLevelMrApprovals#allow_committer_approval}

---

##### `allowOverridesToApproverListPerMergeRequest`<sup>Optional</sup> <a name="allowOverridesToApproverListPerMergeRequest" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.allowOverridesToApproverListPerMergeRequest"></a>

```typescript
public readonly allowOverridesToApproverListPerMergeRequest: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow or prevent overriding approvers per merge request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/group_level_mr_approvals#allow_overrides_to_approver_list_per_merge_request GroupLevelMrApprovals#allow_overrides_to_approver_list_per_merge_request}

---

##### `keepSettingsOnDestroy`<sup>Optional</sup> <a name="keepSettingsOnDestroy" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.keepSettingsOnDestroy"></a>

```typescript
public readonly keepSettingsOnDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set to true if the group merge request approval settings should not be reset to their pre-terraform defaults on destroy.

You will need to apply the resource with the new setting before destroying the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/group_level_mr_approvals#keep_settings_on_destroy GroupLevelMrApprovals#keep_settings_on_destroy}

---

##### `requireReauthenticationToApprove`<sup>Optional</sup> <a name="requireReauthenticationToApprove" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.requireReauthenticationToApprove"></a>

```typescript
public readonly requireReauthenticationToApprove: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Require approver to authenticate before adding the approval.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/group_level_mr_approvals#require_reauthentication_to_approve GroupLevelMrApprovals#require_reauthentication_to_approve}

---

##### `retainApprovalsOnPush`<sup>Optional</sup> <a name="retainApprovalsOnPush" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.retainApprovalsOnPush"></a>

```typescript
public readonly retainApprovalsOnPush: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Retain approval count on a new push.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/group_level_mr_approvals#retain_approvals_on_push GroupLevelMrApprovals#retain_approvals_on_push}

---



