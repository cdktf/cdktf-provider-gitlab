# `dataGitlabInstanceDeployKeys` Submodule <a name="`dataGitlabInstanceDeployKeys` Submodule" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabInstanceDeployKeys <a name="DataGitlabInstanceDeployKeys" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/data-sources/instance_deploy_keys gitlab_instance_deploy_keys}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.Initializer"></a>

```typescript
import { dataGitlabInstanceDeployKeys } from '@cdktf/provider-gitlab'

new dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys(scope: Construct, id: string, config?: DataGitlabInstanceDeployKeysConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig">DataGitlabInstanceDeployKeysConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig">DataGitlabInstanceDeployKeysConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.resetPublic">resetPublic</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPublic` <a name="resetPublic" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.resetPublic"></a>

```typescript
public resetPublic(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGitlabInstanceDeployKeys resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.isConstruct"></a>

```typescript
import { dataGitlabInstanceDeployKeys } from '@cdktf/provider-gitlab'

dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.isTerraformElement"></a>

```typescript
import { dataGitlabInstanceDeployKeys } from '@cdktf/provider-gitlab'

dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.isTerraformDataSource"></a>

```typescript
import { dataGitlabInstanceDeployKeys } from '@cdktf/provider-gitlab'

dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.generateConfigForImport"></a>

```typescript
import { dataGitlabInstanceDeployKeys } from '@cdktf/provider-gitlab'

dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGitlabInstanceDeployKeys resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGitlabInstanceDeployKeys to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGitlabInstanceDeployKeys that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/data-sources/instance_deploy_keys#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGitlabInstanceDeployKeys to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.deployKeys">deployKeys</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList">DataGitlabInstanceDeployKeysDeployKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.publicInput">publicInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.public">public</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `deployKeys`<sup>Required</sup> <a name="deployKeys" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.deployKeys"></a>

```typescript
public readonly deployKeys: DataGitlabInstanceDeployKeysDeployKeysList;
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList">DataGitlabInstanceDeployKeysDeployKeysList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `publicInput`<sup>Optional</sup> <a name="publicInput" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.publicInput"></a>

```typescript
public readonly publicInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `public`<sup>Required</sup> <a name="public" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.public"></a>

```typescript
public readonly public: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabInstanceDeployKeysConfig <a name="DataGitlabInstanceDeployKeysConfig" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.Initializer"></a>

```typescript
import { dataGitlabInstanceDeployKeys } from '@cdktf/provider-gitlab'

const dataGitlabInstanceDeployKeysConfig: dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/data-sources/instance_deploy_keys#id DataGitlabInstanceDeployKeys#id}. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.public">public</a></code> | <code>boolean \| cdktf.IResolvable</code> | Only return deploy keys that are public. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/data-sources/instance_deploy_keys#id DataGitlabInstanceDeployKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `public`<sup>Optional</sup> <a name="public" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.public"></a>

```typescript
public readonly public: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Only return deploy keys that are public.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/data-sources/instance_deploy_keys#public DataGitlabInstanceDeployKeys#public}

---

### DataGitlabInstanceDeployKeysDeployKeys <a name="DataGitlabInstanceDeployKeysDeployKeys" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeys.Initializer"></a>

```typescript
import { dataGitlabInstanceDeployKeys } from '@cdktf/provider-gitlab'

const dataGitlabInstanceDeployKeysDeployKeys: dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeys = { ... }
```


### DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccess <a name="DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccess" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccess.Initializer"></a>

```typescript
import { dataGitlabInstanceDeployKeys } from '@cdktf/provider-gitlab'

const dataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccess: dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccess = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGitlabInstanceDeployKeysDeployKeysList <a name="DataGitlabInstanceDeployKeysDeployKeysList" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.Initializer"></a>

```typescript
import { dataGitlabInstanceDeployKeys } from '@cdktf/provider-gitlab'

new dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.get"></a>

```typescript
public get(index: number): DataGitlabInstanceDeployKeysDeployKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGitlabInstanceDeployKeysDeployKeysOutputReference <a name="DataGitlabInstanceDeployKeysDeployKeysOutputReference" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.Initializer"></a>

```typescript
import { dataGitlabInstanceDeployKeys } from '@cdktf/provider-gitlab'

new dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.fingerprint">fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.projectsWithWriteAccess">projectsWithWriteAccess</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList">DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeys">DataGitlabInstanceDeployKeysDeployKeys</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.fingerprint"></a>

```typescript
public readonly fingerprint: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `projectsWithWriteAccess`<sup>Required</sup> <a name="projectsWithWriteAccess" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.projectsWithWriteAccess"></a>

```typescript
public readonly projectsWithWriteAccess: DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList;
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList">DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList</a>

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGitlabInstanceDeployKeysDeployKeys;
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeys">DataGitlabInstanceDeployKeysDeployKeys</a>

---


### DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList <a name="DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.Initializer"></a>

```typescript
import { dataGitlabInstanceDeployKeys } from '@cdktf/provider-gitlab'

new dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.get"></a>

```typescript
public get(index: number): DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference <a name="DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.Initializer"></a>

```typescript
import { dataGitlabInstanceDeployKeys } from '@cdktf/provider-gitlab'

new dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.nameWithNamespace">nameWithNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.pathWithNamespace">pathWithNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccess">DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nameWithNamespace`<sup>Required</sup> <a name="nameWithNamespace" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.nameWithNamespace"></a>

```typescript
public readonly nameWithNamespace: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `pathWithNamespace`<sup>Required</sup> <a name="pathWithNamespace" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.pathWithNamespace"></a>

```typescript
public readonly pathWithNamespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccess;
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccess">DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccess</a>

---



