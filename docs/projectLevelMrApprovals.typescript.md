# `projectLevelMrApprovals` Submodule <a name="`projectLevelMrApprovals` Submodule" id="@cdktf/provider-gitlab.projectLevelMrApprovals"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectLevelMrApprovals <a name="ProjectLevelMrApprovals" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_level_mr_approvals gitlab_project_level_mr_approvals}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer"></a>

```typescript
import { projectLevelMrApprovals } from '@cdktf/provider-gitlab'

new projectLevelMrApprovals.ProjectLevelMrApprovals(scope: Construct, id: string, config: ProjectLevelMrApprovalsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig">ProjectLevelMrApprovalsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig">ProjectLevelMrApprovalsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetDisableOverridingApproversPerMergeRequest">resetDisableOverridingApproversPerMergeRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetMergeRequestsAuthorApproval">resetMergeRequestsAuthorApproval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetMergeRequestsDisableCommittersApproval">resetMergeRequestsDisableCommittersApproval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetRequirePasswordToApprove">resetRequirePasswordToApprove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetResetApprovalsOnPush">resetResetApprovalsOnPush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetSelectiveCodeOwnerRemovals">resetSelectiveCodeOwnerRemovals</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDisableOverridingApproversPerMergeRequest` <a name="resetDisableOverridingApproversPerMergeRequest" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetDisableOverridingApproversPerMergeRequest"></a>

```typescript
public resetDisableOverridingApproversPerMergeRequest(): void
```

##### `resetMergeRequestsAuthorApproval` <a name="resetMergeRequestsAuthorApproval" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetMergeRequestsAuthorApproval"></a>

```typescript
public resetMergeRequestsAuthorApproval(): void
```

##### `resetMergeRequestsDisableCommittersApproval` <a name="resetMergeRequestsDisableCommittersApproval" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetMergeRequestsDisableCommittersApproval"></a>

```typescript
public resetMergeRequestsDisableCommittersApproval(): void
```

##### `resetRequirePasswordToApprove` <a name="resetRequirePasswordToApprove" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetRequirePasswordToApprove"></a>

```typescript
public resetRequirePasswordToApprove(): void
```

##### `resetResetApprovalsOnPush` <a name="resetResetApprovalsOnPush" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetResetApprovalsOnPush"></a>

```typescript
public resetResetApprovalsOnPush(): void
```

##### `resetSelectiveCodeOwnerRemovals` <a name="resetSelectiveCodeOwnerRemovals" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetSelectiveCodeOwnerRemovals"></a>

```typescript
public resetSelectiveCodeOwnerRemovals(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectLevelMrApprovals resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.isConstruct"></a>

```typescript
import { projectLevelMrApprovals } from '@cdktf/provider-gitlab'

projectLevelMrApprovals.ProjectLevelMrApprovals.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.isTerraformElement"></a>

```typescript
import { projectLevelMrApprovals } from '@cdktf/provider-gitlab'

projectLevelMrApprovals.ProjectLevelMrApprovals.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.isTerraformResource"></a>

```typescript
import { projectLevelMrApprovals } from '@cdktf/provider-gitlab'

projectLevelMrApprovals.ProjectLevelMrApprovals.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.generateConfigForImport"></a>

```typescript
import { projectLevelMrApprovals } from '@cdktf/provider-gitlab'

projectLevelMrApprovals.ProjectLevelMrApprovals.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ProjectLevelMrApprovals resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ProjectLevelMrApprovals to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ProjectLevelMrApprovals that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_level_mr_approvals#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ProjectLevelMrApprovals to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.disableOverridingApproversPerMergeRequestInput">disableOverridingApproversPerMergeRequestInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.mergeRequestsAuthorApprovalInput">mergeRequestsAuthorApprovalInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.mergeRequestsDisableCommittersApprovalInput">mergeRequestsDisableCommittersApprovalInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.requirePasswordToApproveInput">requirePasswordToApproveInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.resetApprovalsOnPushInput">resetApprovalsOnPushInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.selectiveCodeOwnerRemovalsInput">selectiveCodeOwnerRemovalsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.disableOverridingApproversPerMergeRequest">disableOverridingApproversPerMergeRequest</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.mergeRequestsAuthorApproval">mergeRequestsAuthorApproval</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.mergeRequestsDisableCommittersApproval">mergeRequestsDisableCommittersApproval</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.requirePasswordToApprove">requirePasswordToApprove</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.resetApprovalsOnPush">resetApprovalsOnPush</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.selectiveCodeOwnerRemovals">selectiveCodeOwnerRemovals</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `disableOverridingApproversPerMergeRequestInput`<sup>Optional</sup> <a name="disableOverridingApproversPerMergeRequestInput" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.disableOverridingApproversPerMergeRequestInput"></a>

```typescript
public readonly disableOverridingApproversPerMergeRequestInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mergeRequestsAuthorApprovalInput`<sup>Optional</sup> <a name="mergeRequestsAuthorApprovalInput" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.mergeRequestsAuthorApprovalInput"></a>

```typescript
public readonly mergeRequestsAuthorApprovalInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mergeRequestsDisableCommittersApprovalInput`<sup>Optional</sup> <a name="mergeRequestsDisableCommittersApprovalInput" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.mergeRequestsDisableCommittersApprovalInput"></a>

```typescript
public readonly mergeRequestsDisableCommittersApprovalInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `requirePasswordToApproveInput`<sup>Optional</sup> <a name="requirePasswordToApproveInput" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.requirePasswordToApproveInput"></a>

```typescript
public readonly requirePasswordToApproveInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resetApprovalsOnPushInput`<sup>Optional</sup> <a name="resetApprovalsOnPushInput" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.resetApprovalsOnPushInput"></a>

```typescript
public readonly resetApprovalsOnPushInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `selectiveCodeOwnerRemovalsInput`<sup>Optional</sup> <a name="selectiveCodeOwnerRemovalsInput" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.selectiveCodeOwnerRemovalsInput"></a>

```typescript
public readonly selectiveCodeOwnerRemovalsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disableOverridingApproversPerMergeRequest`<sup>Required</sup> <a name="disableOverridingApproversPerMergeRequest" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.disableOverridingApproversPerMergeRequest"></a>

```typescript
public readonly disableOverridingApproversPerMergeRequest: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mergeRequestsAuthorApproval`<sup>Required</sup> <a name="mergeRequestsAuthorApproval" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.mergeRequestsAuthorApproval"></a>

```typescript
public readonly mergeRequestsAuthorApproval: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mergeRequestsDisableCommittersApproval`<sup>Required</sup> <a name="mergeRequestsDisableCommittersApproval" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.mergeRequestsDisableCommittersApproval"></a>

```typescript
public readonly mergeRequestsDisableCommittersApproval: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `requirePasswordToApprove`<sup>Required</sup> <a name="requirePasswordToApprove" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.requirePasswordToApprove"></a>

```typescript
public readonly requirePasswordToApprove: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resetApprovalsOnPush`<sup>Required</sup> <a name="resetApprovalsOnPush" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.resetApprovalsOnPush"></a>

```typescript
public readonly resetApprovalsOnPush: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `selectiveCodeOwnerRemovals`<sup>Required</sup> <a name="selectiveCodeOwnerRemovals" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.selectiveCodeOwnerRemovals"></a>

```typescript
public readonly selectiveCodeOwnerRemovals: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectLevelMrApprovalsConfig <a name="ProjectLevelMrApprovalsConfig" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.Initializer"></a>

```typescript
import { projectLevelMrApprovals } from '@cdktf/provider-gitlab'

const projectLevelMrApprovalsConfig: projectLevelMrApprovals.ProjectLevelMrApprovalsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.project">project</a></code> | <code>string</code> | The ID or URL-encoded path of a project to change MR approval configuration. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.disableOverridingApproversPerMergeRequest">disableOverridingApproversPerMergeRequest</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set to `true` to disable overriding approvers per merge request. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.mergeRequestsAuthorApproval">mergeRequestsAuthorApproval</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set to `true` to allow merge requests authors to approve their own merge requests. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.mergeRequestsDisableCommittersApproval">mergeRequestsDisableCommittersApproval</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set to `true` to disable merge request committers from approving their own merge requests. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.requirePasswordToApprove">requirePasswordToApprove</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set to `true` to require authentication to approve merge requests. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.resetApprovalsOnPush">resetApprovalsOnPush</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set to `true` to remove all approvals in a merge request when new commits are pushed to its source branch. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.selectiveCodeOwnerRemovals">selectiveCodeOwnerRemovals</a></code> | <code>boolean \| cdktf.IResolvable</code> | Reset approvals from Code Owners if their files changed. Can be enabled only if reset_approvals_on_push is disabled. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The ID or URL-encoded path of a project to change MR approval configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_level_mr_approvals#project ProjectLevelMrApprovals#project}

---

##### `disableOverridingApproversPerMergeRequest`<sup>Optional</sup> <a name="disableOverridingApproversPerMergeRequest" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.disableOverridingApproversPerMergeRequest"></a>

```typescript
public readonly disableOverridingApproversPerMergeRequest: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set to `true` to disable overriding approvers per merge request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_level_mr_approvals#disable_overriding_approvers_per_merge_request ProjectLevelMrApprovals#disable_overriding_approvers_per_merge_request}

---

##### `mergeRequestsAuthorApproval`<sup>Optional</sup> <a name="mergeRequestsAuthorApproval" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.mergeRequestsAuthorApproval"></a>

```typescript
public readonly mergeRequestsAuthorApproval: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set to `true` to allow merge requests authors to approve their own merge requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_level_mr_approvals#merge_requests_author_approval ProjectLevelMrApprovals#merge_requests_author_approval}

---

##### `mergeRequestsDisableCommittersApproval`<sup>Optional</sup> <a name="mergeRequestsDisableCommittersApproval" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.mergeRequestsDisableCommittersApproval"></a>

```typescript
public readonly mergeRequestsDisableCommittersApproval: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set to `true` to disable merge request committers from approving their own merge requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_level_mr_approvals#merge_requests_disable_committers_approval ProjectLevelMrApprovals#merge_requests_disable_committers_approval}

---

##### `requirePasswordToApprove`<sup>Optional</sup> <a name="requirePasswordToApprove" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.requirePasswordToApprove"></a>

```typescript
public readonly requirePasswordToApprove: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set to `true` to require authentication to approve merge requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_level_mr_approvals#require_password_to_approve ProjectLevelMrApprovals#require_password_to_approve}

---

##### `resetApprovalsOnPush`<sup>Optional</sup> <a name="resetApprovalsOnPush" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.resetApprovalsOnPush"></a>

```typescript
public readonly resetApprovalsOnPush: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set to `true` to remove all approvals in a merge request when new commits are pushed to its source branch.

Default is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_level_mr_approvals#reset_approvals_on_push ProjectLevelMrApprovals#reset_approvals_on_push}

---

##### `selectiveCodeOwnerRemovals`<sup>Optional</sup> <a name="selectiveCodeOwnerRemovals" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.selectiveCodeOwnerRemovals"></a>

```typescript
public readonly selectiveCodeOwnerRemovals: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Reset approvals from Code Owners if their files changed. Can be enabled only if reset_approvals_on_push is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_level_mr_approvals#selective_code_owner_removals ProjectLevelMrApprovals#selective_code_owner_removals}

---



